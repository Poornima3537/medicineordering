import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import orderService
from "../services/orderService";

import prescriptionService
from "../services/prescriptionService";

function Checkout() {

  const [address,
    setAddress] =
    useState("");

  const [validPrescription,
    setValidPrescription] =
    useState(false);

  useEffect(() => {

    checkPrescription();

  }, []);

  const checkPrescription =
    async () => {

    try {

      const data =
        await prescriptionService
          .getMyPrescriptions();

      const isValid =
        data.some(
          (prescription) =>

            prescription.status
            === "VALID"
        );

      setValidPrescription(
        isValid
      );

    } catch (error) {

      toast.error(
        "Failed to check prescriptions"
      );
    }
  };

  const handlePlaceOrder =
    async () => {

    try {

      await orderService
        .placeOrder({

          deliveryAddress:
          address,
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

              <textarea
                className=
                "form-control"
                rows="4"
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
              ></textarea>

            </div>

            {
              validPrescription
              ? (
                <div className=
                  "alert alert-success"
                >

                  Prescription Validated

                </div>
              ) : (
                <div className=
                  "alert alert-danger"
                >

                  Valid Prescription Required

                </div>
              )
            }

            <button
              className=
              "btn btn-primary w-100"
              disabled=
              {!validPrescription}
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