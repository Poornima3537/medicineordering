import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import medicineService
from "../services/medicineService";

function ManageMedicines() {

  const [medicines,
    setMedicines] =
    useState([]);

  useEffect(() => {

    fetchMedicines();

  }, []);

  const fetchMedicines =
    async () => {

    try {

      const data =
        await medicineService
          .getAllMedicines();

      setMedicines(data);

    } catch (error) {

      toast.error(
        "Failed to load medicines"
      );
    }
  };

  const handleDelete =
    async (id) => {

    try {

      await medicineService
        .deleteMedicine(id);

      toast.success(
        "Medicine Deleted"
      );

      fetchMedicines();

    } catch (error) {

      toast.error(
        "Delete Failed"
      );
    }
  };

  return (

    <div className=
      "container mt-5"
    >

      <div className=
        "d-flex justify-content-between align-items-center mb-4"
      >

        <h2>
          Manage Medicines
        </h2>

        <Link
          to="/admin/add-medicine"
          className=
          "btn btn-primary"
        >
          Add Medicine
        </Link>

      </div>

      <div className=
        "table-responsive"
      >

        <table className=
          "table table-bordered"
        >

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Category</th>

              <th>Dosage</th>

              <th>Packaging</th>

              <th>Prescription</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {
              medicines.map(
                (medicine) => (

                  <tr
                    key=
                    {medicine.id}
                  >

                    <td>
                      {medicine.id}
                    </td>

                    <td>
                      {medicine.name}
                    </td>

                    <td>
                      ₹{medicine.price}
                    </td>

                    <td>
                      {
                        medicine.stockQuantity
                      }
                    </td>

                    <td>
                      {
                        medicine.categoryName
                      }
                    </td>

                    <td>
                      {
                        medicine.dosageValue
                      }
                    </td>

                    <td>
                      {
                        medicine.packagingType
                      }
                    </td>

                    <td>

                      {
                        medicine
                        .prescriptionRequired
                        ? "YES"
                        : "NO"
                      }

                    </td>

                    <td>

                      <Link
                        to=
                        {
                          `/admin/edit-medicine/${medicine.id}`
                        }
                        className=
                        "btn btn-warning btn-sm me-2"
                      >
                        Edit
                      </Link>

                      <button
                        className=
                        "btn btn-danger btn-sm"
                        onClick={() =>
                          handleDelete(
                            medicine.id
                          )
                        }
                      >
                        Delete
                      </button>

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

export default ManageMedicines;