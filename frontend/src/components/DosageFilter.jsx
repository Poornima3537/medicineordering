function DosageFilter({

  dosages,

  handleDosage,
}) {

  return (

    <select
      className="form-select"
      onChange={handleDosage}
    >

      <option value="">
        All Dosages
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
  );
}

export default DosageFilter;