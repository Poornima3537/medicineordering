import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import medicineService
from "../services/medicineService";

import cartService
from "../services/cartService";

function MedicineDetails() {

  const { id } =
    useParams();

  const [medicine,
    setMedicine] =
    useState(null);

  useEffect(() => {

    fetchMedicine();

  }, []);

  const fetchMedicine =
    async () => {

    try {

      const medicines =
        await medicineService
          .getAllMedicines();

      const selectedMedicine =
        medicines.find(
          (m) =>
            m.id === Number(id)
        );

      setMedicine(
        selectedMedicine
      );

    } catch (error) {

      toast.error(
        "Failed to load medicine"
      );
    }
  };

  const handleAddToCart =
    async () => {

    try {

      await cartService
        .addToCart(
          medicine.id
        );

      toast.success(
        "Medicine added to cart"
      );

    } catch (error) {

      toast.error(
        "Failed to add to cart"
      );
    }
  };

  if (!medicine) {

    return (
      <div className=
        "container mt-5"
      >

        <h4>
          Loading...
        </h4>

      </div>
    );
  }

  return (

    <div className=
      "container mt-5"
    >

      <div className=
        "row justify-content-center"
      >

        <div className=
          "col-md-8"
        >

          <div className=
            "card shadow p-4"
          >

            <h2 className=
              "mb-3"
            >
              {medicine.name}
            </h2>

            <p>
              <strong>
                Description:
              </strong>
              {" "}
              {
                medicine.description
              }
            </p>

            <p>
              <strong>
                Manufacturer:
              </strong>
              {" "}
              {
                medicine.manufacturer
              }
            </p>

            <p>
              <strong>
                Price:
              </strong>
              {" "}
              ₹{medicine.price}
            </p>

            <p>
              <strong>
                Stock:
              </strong>
              {" "}
              {
                medicine.stockQuantity
              }
            </p>

            <p>
              <strong>
                Category:
              </strong>
              {" "}
              {
                medicine.categoryName
              }
            </p>

            <p>
              <strong>
                Dosage:
              </strong>
              {" "}
              {
                medicine.dosageValue
              }
            </p>

            <p>
              <strong>
                Packaging:
              </strong>
              {" "}
              {
                medicine.packagingType
              }
            </p>

            {
              medicine
              .prescriptionRequired
              && (
                <div className=
                  "alert alert-danger"
                >

                  Prescription Required

                </div>
              )
            }

            <button
              className=
              "btn btn-primary"
              onClick=
              {handleAddToCart}
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MedicineDetails;