function CartItem({

  item,

  handleIncrease,

  handleDecrease,

  handleRemove,
}) {

  return (

    <div className=
      "card shadow mb-3"
    >

      <div className=
        "card-body"
      >

        <div className=
          "d-flex justify-content-between"
        >

          <div>

            <h5>
              {item.medicineName}
            </h5>

            <p>
              ₹{item.price}
            </p>

            <p>
              Quantity:
              {" "}
              {item.quantity}
            </p>

            <p>
              Subtotal:
              {" "}
              ₹{item.subtotal}
            </p>

          </div>

          <div>

            <button
              className=
              "btn btn-success me-2"
              onClick={() =>
                handleIncrease(
                  item.id,
                  item.quantity
                )
              }
            >
              +
            </button>

            <button
              className=
              "btn btn-warning me-2"
              onClick={() =>
                handleDecrease(
                  item.id,
                  item.quantity
                )
              }
            >
              -
            </button>

            <button
              className=
              "btn btn-danger"
              onClick={() =>
                handleRemove(
                  item.id
                )
              }
            >
              Remove
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CartItem;