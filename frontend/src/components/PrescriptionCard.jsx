function PrescriptionCard({
  prescription,
}) {

  return (

    <div className=
      "card shadow mb-3"
    >

      <div className=
        "card-body"
      >

        <h5>
          Prescription ID:
          {" "}
          {prescription.id}
        </h5>

        <p>
          Medicine:
          {" "}
          {
            prescription.medicineName
          }
        </p>

        <p>
          File:
          {" "}
          {
            prescription.fileName
          }
        </p>

        <p>
          Status:
          {" "}
          {
            prescription.status
          }
        </p>

      </div>

    </div>
  );
}

export default PrescriptionCard;