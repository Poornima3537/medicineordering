import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import orderService
from "../service/orderService";

function Orders() {

  const [orders,
    setOrders] =
    useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
    async () => {

    try {

      const data =
        await orderService
          .getMyOrders();

      setOrders(data);

    } catch (error) {

      toast.error(
        "Failed to load orders"
      );
    }
  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        My Orders
      </h2>

      {
        orders.length > 0
        ? (
          orders.map((order) => (

            <div
              key={order.orderId}
              className="card shadow mb-4"
            >

              <div className="card-body">

                <h5>
                  Order ID:
                  {" "}
                  {order.orderId}
                </h5>

                <p>
                  Total Amount:
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
                  {order.paymentStatus}
                </p>

                <p>
                  Address:
                  {" "}
                  {order.deliveryAddress}
                </p>

              </div>

            </div>
          ))
        ) : (
          <h4>No Orders Found</h4>
        )
      }

    </div>
  );
}

export default Orders;
