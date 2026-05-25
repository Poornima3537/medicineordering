import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import adminService
from "../services/adminService";

function ManageOrders() {

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
        await adminService
          .getAllOrders();

      setOrders(data);

    } catch (error) {

      toast.error(
        "Failed to load orders"
      );
    }
  };

  const handleStatusUpdate =
    async (
      id,
      status
    ) => {

    try {

      await adminService
        .updateOrderStatus(
          id,
          status
        );

      toast.success(
        "Order Status Updated"
      );

      fetchOrders();

    } catch (error) {

      toast.error(
        "Update Failed"
      );
    }
  };

  const handlePaymentUpdate =
    async (
      id,
      paymentStatus
    ) => {

    try {

      await adminService
        .updatePaymentStatus(
          id,
          paymentStatus
        );

      toast.success(
        "Payment Status Updated"
      );

      fetchOrders();

    } catch (error) {

      toast.error(
        "Update Failed"
      );
    }
  };

  return (

    <div className=
      "container mt-5"
    >

      <h2 className=
        "mb-4 text-center"
      >
        Manage Orders
      </h2>

      <div className=
        "table-responsive"
      >

        <table className=
          "table table-bordered"
        >

          <thead>

            <tr>

              <th>ID</th>

              <th>User</th>

              <th>Total</th>

              <th>Status</th>

              <th>Payment</th>

              <th>Address</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {
              orders.map(
                (order) => (

                  <tr
                    key={order.id}
                  >

                    <td>
                      {order.id}
                    </td>

                    <td>
                      {
                        order.userName
                      }
                    </td>

                    <td>
                      ₹
                      {
                        order.totalAmount
                      }
                    </td>

                    <td>
                      {order.status}
                    </td>

                    <td>
                      {
                        order.paymentStatus
                      }
                    </td>

                    <td>
                      {
                        order.deliveryAddress
                      }
                    </td>

                    <td>

                      <div className=
                        "d-flex flex-column gap-2"
                      >

                        <select
                          className=
                          "form-select"
                          onChange={(e) =>
                            handleStatusUpdate(
                              order.id,
                              e.target.value
                            )
                          }
                        >

                          <option>
                            Update Status
                          </option>

                          <option value=
                            "CONFIRMED"
                          >
                            CONFIRMED
                          </option>

                          <option value=
                            "SHIPPED"
                          >
                            SHIPPED
                          </option>

                          <option value=
                            "DELIVERED"
                          >
                            DELIVERED
                          </option>

                          <option value=
                            "CANCELLED"
                          >
                            CANCELLED
                          </option>

                        </select>

                        <select
                          className=
                          "form-select"
                          onChange={(e) =>
                            handlePaymentUpdate(
                              order.id,
                              e.target.value
                            )
                          }
                        >

                          <option>
                            Payment Status
                          </option>

                          <option value=
                            "PENDING"
                          >
                            PENDING
                          </option>

                          <option value=
                            "PAID"
                          >
                            PAID
                          </option>

                        </select>

                      </div>

                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageOrders;