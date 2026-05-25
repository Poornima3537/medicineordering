import {
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import prescriptionService
from "../service/prescriptionService";

function UploadPrescription() {

  const [formData,
    setFormData] =
    useState({

      medicineId: "",
      fileName: "",
      fileType: "",
    });

  const handleChange = (
    e
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

    e.preventDefault();

    try {

      await prescriptionService
        .uploadPrescription(
          formData
        );

      toast.success(
        "Prescription Uploaded Successfully"
      );

      setFormData({

        medicineId: "",
        fileName: "",
        fileType: "",
      });

    } catch (error) {

      toast.error(
        "Upload Failed"
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
          "col-md-6"
        >

          <div className=
            "card shadow p-4"
          >

            <h2 className=
              "text-center mb-4"
            >
              Upload Prescription
            </h2>

            <form
              onSubmit=
              {handleSubmit}
            >

              <div className=
                "mb-3"
              >

                <label>
                  Medicine ID
                </label>

                <input
                  type="number"
                  name="medicineId"
                  className=
                  "form-control"
                  value=
                  {formData.medicineId}
                  onChange=
                  {handleChange}
                  required
                />

              </div>

              <div className=
                "mb-3"
              >

                <label>
                  File Name
                </label>

                <input
                  type="text"
                  name="fileName"
                  className=
                  "form-control"
                  value=
                  {formData.fileName}
                  onChange=
                  {handleChange}
                  required
                />

              </div>

              <div className=
                "mb-3"
              >

                <label>
                  File Type
                </label>

                <input
                  type="text"
                  name="fileType"
                  className=
                  "form-control"
                  placeholder="pdf/image"
                  value=
                  {formData.fileType}
                  onChange=
                  {handleChange}
                  required
                />

              </div>

              <button
                type="submit"
                className=
                "btn btn-primary w-100"
              >
                Upload
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UploadPrescription;