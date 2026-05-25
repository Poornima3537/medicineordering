function OrderCard({
  order,
}) {

  return (

    <div className=
      "card shadow mb-4"
    >

      <div className=
        "card-body"
      >

        <h5>
          Order ID:
          {" "}
          {order.orderId}
        </h5>

        <p>
          Total:
          {" "}
          ₹{order.totalAmount}
        </p>

        <p>
          Status:
          {" "}
          {order.status}
        </p>

        <p>
          Payment:
          {" "}
          {
            order.paymentStatus
          }
        </p>

      </div>

    </div>
  );
}

export default OrderCard;
