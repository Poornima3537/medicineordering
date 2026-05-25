import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import prescriptionService
from "../services/prescriptionService";

function PrescriptionStatus() {

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
        await prescriptionService
          .getMyPrescriptions();

      setPrescriptions(data);

    } catch (error) {

      toast.error(
        "Failed to load prescriptions"
      );
    }
  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Prescription Status
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>

            <th>Medicine</th>

            <th>File</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {
            prescriptions.map(
              (prescription) => (

                <tr
                  key={prescription.id}
                >

                  <td>
                    {prescription.id}
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

                </tr>
              )
            )
          }

        </tbody>

      </table>

    </div>
  );
}

export default PrescriptionStatus;