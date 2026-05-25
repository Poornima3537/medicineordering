import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import adminService
from "../service/adminService";

function ManagePrescriptions() {

  const [prescriptions,
    setPrescriptions] =
    useState([]);

  useEffect(() => {

    fetchPrescriptions();

  }, []);

  const fetchPrescriptions =
    async () => {

    try {

      const data =
        await adminService
          .getAllPrescriptions();

      setPrescriptions(data);

    } catch (error) {

      toast.error(
        "Failed to load prescriptions"
      );
    }
  };

  const updateStatus =
    async (
      id,
      status
    ) => {

    try {

      await adminService
        .updatePrescriptionStatus(
          id,
          status
        );

      toast.success(
        `Prescription ${status}`
      );

      fetchPrescriptions();

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
        Manage Prescriptions
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

              <th>Medicine</th>

              <th>File</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {
              prescriptions.map(
                (
                  prescription
                ) => (

                  <tr
                    key=
                    {prescription.id}
                  >

                    <td>
                      {
                        prescription.id
                      }
                    </td>

                    <td>
                      {
                        prescription.userName
                      }
                    </td>

                    <td>
                      {
                        prescription.medicineName
                      }
                    </td>

                    <td>
                      {
                        prescription.fileName
                      }
                    </td>

                    <td>
                      {
                        prescription.status
                      }
                    </td>

                    <td>

                      <button
                        className=
                        "btn btn-success btn-sm me-2"
                        onClick={() =>
                          updateStatus(
                            prescription.id,
                            "VALID"
                          )
                        }
                      >
                        VALID
                      </button>

                      <button
                        className=
                        "btn btn-danger btn-sm"
                        onClick={() =>
                          updateStatus(
                            prescription.id,
                            "REJECTED"
                          )
                        }
                      >
                        REJECT
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

export default ManagePrescriptions;