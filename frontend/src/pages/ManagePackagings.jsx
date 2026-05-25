import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import packagingService
from "../service/packagingService";

function ManagePackagings() {

  const [packagings,
    setPackagings] =
    useState([]);

  const [type,
    setType] =
    useState("");

  useEffect(() => {

    fetchPackagings();

  }, []);

  const fetchPackagings =
    async () => {

    try {

      const data =
        await packagingService
          .getAllPackagings();

      setPackagings(data);

    } catch {

      toast.error(
        "Failed to load packagings"
      );
    }
  };

  const handleAdd =
    async () => {

    try {

      await packagingService
        .addPackaging({ type });

      toast.success(
        "Packaging Added"
      );

      setType("");

      fetchPackagings();

    } catch {

      toast.error(
        "Add Failed"
      );
    }
  };

  const handleDelete =
    async (id) => {

    try {

      await packagingService
        .deletePackaging(id);

      toast.success(
        "Packaging Deleted"
      );

      fetchPackagings();

    } catch {

      toast.error(
        "Delete Failed"
      );
    }
  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Manage Packagings
      </h2>

      <div className="card p-4 shadow mb-4">

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Packaging"
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={handleAdd}
        >
          Add Packaging
        </button>

      </div>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>

            <th>Packaging</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            packagings.map(
              (packaging) => (

                <tr key={packaging.id}>

                  <td>
                    {packaging.id}
                  </td>

                  <td>
                    {packaging.type}
                  </td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(
                          packaging.id
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

export default ManagePackagings;
