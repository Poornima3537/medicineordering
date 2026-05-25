function PackagingFilter({

  packagings,

  handlePackaging,
}) {

  return (

    <select
      className="form-select"
      onChange={handlePackaging}
    >

      <option value="">
        All Packagings
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
  );
}

export default PackagingFilter;