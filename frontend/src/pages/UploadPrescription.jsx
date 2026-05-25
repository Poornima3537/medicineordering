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

  const [selectedFile,
    setSelectedFile] =
    useState(null);

  const handleChange = (
    e
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value,
    });
  };

  const handleFileChange = (
    e
  ) => {

    const file =
      e.target.files[0];

    setSelectedFile(file);

    setFormData({

      ...formData,

      fileName:
        file?.name || "",

      fileType:
        file?.type || "",
    });
  };

  const handleSubmit =
    async (e) => {

    e.preventDefault();

    if (!selectedFile) {

      toast.error(
        "Please select prescription file"
      );

      return;
    }

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

      setSelectedFile(null);

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
                  Prescription File
                </label>

                <input
                  type="file"
                  className=
                  "form-control"
                  accept=
                  ".pdf,image/*"
                  onChange=
                  {handleFileChange}
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
