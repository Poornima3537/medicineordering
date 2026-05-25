import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import dosageService
from "../service/dosageService";

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

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>

            <th>Dosage</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            dosages.map(
              (dosage) => (

                <tr key={dosage.id}>

                  <td>
                    {dosage.id}
                  </td>

                  <td>
                    {dosage.value}
                  </td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(
                          dosage.id
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
  );
}

export default ManageDosages;
