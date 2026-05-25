import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import {
  AuthContext,
} from "../context/AuthContext";

import orderService
from "../service/orderService";

import authService
from "../service/authService";

import cartService
from "../service/cartService";

import prescriptionService
from "../service/prescriptionService";

function Checkout() {

  const { user } =
    useContext(AuthContext);

  const [addressConfirmed,
    setAddressConfirmed] =
    useState(false);

  const [deliveryAddress,
    setDeliveryAddress] =
    useState(
      user?.address || ""
    );

  const [hasPrescription,
    setHasPrescription] =
    useState(false);

  const [prescriptionRequired,
    setPrescriptionRequired] =
    useState(false);

  useEffect(() => {

    loadCheckoutDetails();

  }, []);

  const loadCheckoutDetails =
    async () => {

    try {

      const [
        profile,
        cart,
        prescriptions,
      ] =
        await Promise.all([

          authService
            .getProfile(),

          cartService
            .getCart(),

          prescriptionService
            .getMyPrescriptions(),
        ]);

      setDeliveryAddress(
        profile.address || user?.address || ""
      );

      setHasPrescription(
        prescriptions.length > 0
      );

      setPrescriptionRequired(
        cart.cartItems?.some(
          (item) =>
            item.prescriptionRequired
        ) || false
      );

    } catch (error) {

      toast.error(
        "Failed to load checkout details"
      );
    }
  };

  const handlePlaceOrder =
    async () => {

    try {

      await orderService
        .placeOrder({

          deliveryAddress:
          deliveryAddress,
        });

      toast.success(
        "Order Placed Successfully"
      );

    } catch (error) {

      toast.error(
        "Order Failed"
      );
    }
  };

  return (

    <div className=
      "container mt-5"
    >

      <div className=
        "row justify-content-center"
      >

        <div className=
          "col-md-6"
        >

          <div className=
            "card shadow p-4"
          >

            <h2 className=
              "mb-4 text-center"
            >
              Checkout
            </h2>

            <div className=
              "mb-3"
            >

              <label>
                Delivery Address
              </label>

              <div
                className=
                "border rounded p-3 bg-light"
              >
                {
                  deliveryAddress
                  || "Address not found"
                }
              </div>

            </div>

            {
              !prescriptionRequired
              ? (
                <div className=
                  "alert alert-success"
                >

                  Prescription Not Required

                </div>
              ) : hasPrescription
              ? (
                <div className=
                  "alert alert-success"
                >

                  Prescription Uploaded

                </div>
              ) : (
                <div className=
                  "alert alert-danger"
                >

                  Upload Prescription Required

                </div>
              )
            }

            <div className=
              "form-check mb-3"
            >

              <input
                type="checkbox"
                className=
                "form-check-input"
                id="confirmAddress"
                checked=
                {addressConfirmed}
                onChange={(e) =>
                  setAddressConfirmed(
                    e.target.checked
                  )
                }
              />

              <label
                className=
                "form-check-label"
                htmlFor="confirmAddress"
              >
                Confirm delivery address
              </label>

            </div>

            <button
              className=
              "btn btn-primary w-100"
              disabled=
              {
                !hasPrescription
                && prescriptionRequired
                || !addressConfirmed
                || !deliveryAddress
              }
              onClick=
              {handlePlaceOrder}
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;
