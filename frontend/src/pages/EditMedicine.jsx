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
from "../service/medicineService";

import categoryService
from "../service/categoryService";

import dosageService
from "../service/dosageService";

import packagingService
from "../service/packagingService";

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

  const [categories,
    setCategories] =
    useState([]);

  const [dosages,
    setDosages] =
    useState([]);

  const [packagings,
    setPackagings] =
    useState([]);

  useEffect(() => {

    fetchPageData();

  }, []);

  const fetchPageData =
    async () => {

    try {

      const [
        medicines,
        categoryData,
        dosageData,
        packagingData,
      ] =
        await Promise.all([

          medicineService
            .getAllMedicines(),

          categoryService
            .getAllCategories(),

          dosageService
            .getAllDosages(),

          packagingService
            .getAllPackagings(),
        ]);

      setCategories(categoryData);

      setDosages(dosageData);

      setPackagings(packagingData);

      const medicine =
        medicines.find(
          (m) =>
            m.id === Number(id)
        );

      if (medicine) {

        setFormData(medicine);

      } else {

        toast.error(
          "Medicine not found"
        );
      }

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

          <select
            name="categoryId"
            className="form-control mb-3"
            value={formData.categoryId || ""}
            onChange={handleChange}
          >

            <option value="">
              Select Category
            </option>

            {
              categories.map(
                (category) => (

                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                )
              )
            }

          </select>

          <select
            name="dosageId"
            className="form-control mb-3"
            value={formData.dosageId || ""}
            onChange={handleChange}
          >

            <option value="">
              Select Dosage
            </option>

            {
              dosages.map(
                (dosage) => (

                  <option
                    key={dosage.id}
                    value={dosage.id}
                  >
                    {dosage.value}
                  </option>
                )
              )
            }

          </select>

          <select
            name="packagingId"
            className="form-control mb-3"
            value={formData.packagingId || ""}
            onChange={handleChange}
          >

            <option value="">
              Select Packaging
            </option>

            {
              packagings.map(
                (packaging) => (

                  <option
                    key={packaging.id}
                    value={packaging.id}
                  >
                    {packaging.type}
                  </option>
                )
              )
            }

          </select>

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
