import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import dosageService
from "../services/dosageService";

function ManageDosages() {

  const [dosages,
    setDosages] =
    useState([]);

  const [value,
    setValue] =
    useState("");

  useEffect(() => {

    fetchDosages();

  }, []);

  const fetchDosages =
    async () => {

    try {

      const data =
        await dosageService
          .getAllDosages();

      setDosages(data);

    } catch {

      toast.error(
        "Failed to load dosages"
      );
    }
  };

  const handleAdd =
    async () => {

    try {

      await dosageService
        .addDosage({ value });

      toast.success(
        "Dosage Added"
      );

      setValue("");

      fetchDosages();

    } catch {

      toast.error(
        "Add Failed"
      );
    }
  };

  const handleDelete =
    async (id) => {

    try {

      await dosageService
        .deleteDosage(id);

      toast.success(
        "Dosage Deleted"
      );

      fetchDosages();

    } catch {

      toast.error(
        "Delete Failed"
      );
    }
  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Manage Dosages
      </h2>

      <div className="card p-4 shadow mb-4">

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Dosage"
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={handleAdd}
        >
          Add Dosage
        </button>

      </div>

    </div>
  );
}

export default ManageDosages;