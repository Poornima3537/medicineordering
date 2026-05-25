import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import medicineService
from "../service/medicineService";

function AddMedicine() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      name: "",
      description: "",
      manufacturer: "",
      price: "",
      stockQuantity: "",
      categoryId: "",
      dosageId: "",
      packagingId: "",
      prescriptionRequired:
      false,
    });

  const handleChange = (
    e
  ) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData({

      ...formData,

      [name]:
        type === "checkbox"
        ? checked
        : value,
    });
  };

  const handleSubmit =
    async (e) => {

    e.preventDefault();

    try {

      await medicineService
        .addMedicine(
          formData
        );

      toast.success(
        "Medicine Added"
      );

      navigate(
        "/admin/medicines"
      );

    } catch (error) {

      toast.error(
        "Failed To Add Medicine"
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
          "col-md-8"
        >

          <div className=
            "card shadow p-4"
          >

            <h2 className=
              "mb-4 text-center"
            >
              Add Medicine
            </h2>

            <form
              onSubmit=
              {handleSubmit}
            >

              <div className=
                "row"
              >

                <div className=
                  "col-md-6 mb-3"
                >

                  <label>
                    Medicine Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className=
                    "form-control"
                    value=
                    {formData.name}
                    onChange=
                    {handleChange}
                    required
                  />

                </div>

                <div className=
                  "col-md-6 mb-3"
                >

                  <label>
                    Manufacturer
                  </label>

                  <input
                    type="text"
                    name=
                    "manufacturer"
                    className=
                    "form-control"
                    value=
                    {
                      formData
                      .manufacturer
                    }
                    onChange=
                    {handleChange}
                    required
                  />

                </div>

              </div>

              <div className=
                "mb-3"
              >

                <label>
                  Description
                </label>

                <textarea
                  name="description"
                  className=
                  "form-control"
                  rows="3"
                  value=
                  {
                    formData
                    .description
                  }
                  onChange=
                  {handleChange}
                  required
                ></textarea>

              </div>

              <div className=
                "row"
              >

                <div className=
                  "col-md-4 mb-3"
                >

                  <label>
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    className=
                    "form-control"
                    value=
                    {formData.price}
                    onChange=
                    {handleChange}
                    required
                  />

                </div>

                <div className=
                  "col-md-4 mb-3"
                >

                  <label>
                    Stock
                  </label>

                  <input
                    type="number"
                    name=
                    "stockQuantity"
                    className=
                    "form-control"
                    value=
                    {
                      formData
                      .stockQuantity
                    }
                    onChange=
                    {handleChange}
                    required
                  />

                </div>

                <div className=
                  "col-md-4 mb-3"
                >

                  <label>
                    Category ID
                  </label>

                  <input
                    type="number"
                    name=
                    "categoryId"
                    className=
                    "form-control"
                    value=
                    {
                      formData
                      .categoryId
                    }
                    onChange=
                    {handleChange}
                    required
                  />

                </div>

              </div>

              <div className=
                "row"
              >

                <div className=
                  "col-md-6 mb-3"
                >

                  <label>
                    Dosage ID
                  </label>

                  <input
                    type="number"
                    name="dosageId"
                    className=
                    "form-control"
                    value=
                    {
                      formData
                      .dosageId
                    }
                    onChange=
                    {handleChange}
                    required
                  />

                </div>

                <div className=
                  "col-md-6 mb-3"
                >

                  <label>
                    Packaging ID
                  </label>

                  <input
                    type="number"
                    name=
                    "packagingId"
                    className=
                    "form-control"
                    value=
                    {
                      formData
                      .packagingId
                    }
                    onChange=
                    {handleChange}
                    required
                  />

                </div>

              </div>

              <div className=
                "form-check mb-3"
              >

                <input
                  type="checkbox"
                  name=
                  "prescriptionRequired"
                  className=
                  "form-check-input"
                  checked=
                  {
                    formData
                    .prescriptionRequired
                  }
                  onChange=
                  {handleChange}
                />

                <label
                  className=
                  "form-check-label"
                >
                  Prescription Required
                </label>

              </div>

              <button
                type="submit"
                className=
                "btn btn-primary w-100"
              >
                Add Medicine
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddMedicine;