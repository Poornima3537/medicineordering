import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import cartService
from "../service/cartService";

import prescriptionService
from "../service/prescriptionService";

import CartItem
from "../components/CartItem";

function Cart() {

  const navigate =
    useNavigate();

  const [cart,
    setCart] =
    useState(null);

  const [hasPrescription,
    setHasPrescription] =
    useState(false);

  const prescriptionRequired =
    cart?.cartItems?.some(
      (item) =>
        item.prescriptionRequired
    ) || false;

  const canCheckout =
    !prescriptionRequired
    || hasPrescription;

  useEffect(() => {

    fetchCartDetails();

  }, []);

  const fetchCartDetails =
    async () => {

    try {

      const [
        cartData,
        prescriptions,
      ] =
        await Promise.all([

          cartService
            .getCart(),

          prescriptionService
            .getMyPrescriptions(),
        ]);

      setCart(cartData);

      setHasPrescription(
        prescriptions.length > 0
      );

    } catch (error) {

      toast.error(
        "Failed to load cart"
      );
    }
  };

  const handleIncrease =
    async (
      id,
      quantity
    ) => {

    try {

      await cartService
        .updateQuantity(
          id,
          quantity + 1
        );

      fetchCartDetails();

    } catch (error) {

      toast.error(
        "Failed to update quantity"
      );
    }
  };

  const handleDecrease =
    async (
      id,
      quantity
    ) => {

    if (quantity === 1)
      return;

    try {

      await cartService
        .updateQuantity(
          id,
          quantity - 1
        );

      fetchCartDetails();

    } catch (error) {

      toast.error(
        "Failed to update quantity"
      );
    }
  };

  const handleRemove =
    async (id) => {

    try {

      await cartService
        .removeFromCart(id);

      toast.success(
        "Item removed"
      );

      fetchCartDetails();

    } catch (error) {

      toast.error(
        "Failed to remove item"
      );
    }
  };

  return (

    <div className=
      "container mt-5"
    >

      <h2 className=
        "mb-4"
      >
        My Cart
      </h2>

      {
        cart &&
        cart.cartItems?.length > 0
        ? (
          <>
            {
              cart.cartItems.map(
                (item) => (

                  <CartItem
                    key={item.id}
                    item={item}
                    handleIncrease=
                    {handleIncrease}
                    handleDecrease=
                    {handleDecrease}
                    handleRemove=
                    {handleRemove}
                  />
                )
              )
            }

            <div className=
              "text-end mt-4"
            >

              <h4>
                Total:
                {" "}
                ₹{cart.totalAmount}
              </h4>

              <button
                className=
                "btn btn-primary mt-3"
                disabled=
                {!canCheckout}
                onClick={() =>
                  navigate(
                    "/checkout"
                  )
                }
              >
                Proceed To Checkout
              </button>

              {
                prescriptionRequired
                && !hasPrescription
                && (
                  <div className=
                    "text-danger mt-2"
                  >
                    Upload prescription to proceed checkout
                  </div>
                )
              }

              <Link
                to="/upload-prescription"
                className=
                "btn btn-outline-primary mt-3 ms-2"
              >
                Upload Prescription
              </Link>

            </div>

          </>
        ) : (

          <h4>
            Cart is Empty
          </h4>
        )
      }

    </div>
  );
}

export default Cart;
