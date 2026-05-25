import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import medicineService
from "../services/medicineService";

function EditMedicine() {

  const { id } =
    useParams();

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

  useEffect(() => {

    fetchMedicine();

  }, []);

  const fetchMedicine =
    async () => {

    try {

      const medicines =
        await medicineService
          .getAllMedicines();

      const medicine =
        medicines.find(
          (m) =>
            m.id === Number(id)
        );

      setFormData(medicine);

    } catch (error) {

      toast.error(
        "Failed to load medicine"
      );
    }
  };

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
        .updateMedicine(
          id,
          formData
        );

      toast.success(
        "Medicine Updated"
      );

      navigate(
        "/admin/medicines"
      );

    } catch (error) {

      toast.error(
        "Update Failed"
      );
    }
  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          Edit Medicine
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Medicine Name"
            value={formData.name}
            onChange={handleChange}
          />

          <textarea
            name="description"
            className="form-control mb-3"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <input
            type="text"
            name="manufacturer"
            className="form-control mb-3"
            placeholder="Manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            className="form-control mb-3"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            type="number"
            name="stockQuantity"
            className="form-control mb-3"
            placeholder="Stock"
            value={formData.stockQuantity}
            onChange={handleChange}
          />

          <div className="form-check mb-3">

            <input
              type="checkbox"
              name="prescriptionRequired"
              className="form-check-input"
              checked={
                formData
                .prescriptionRequired
              }
              onChange={handleChange}
            />

            <label className="form-check-label">
              Prescription Required
            </label>

          </div>

          <button className="btn btn-primary">
            Update Medicine
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditMedicine;