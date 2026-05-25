function CategoryFilter({

  categories,

  handleCategory,
}) {

  return (

    <select
      className="form-select"
      onChange={handleCategory}
    >

      <option value="">
        All Categories
      </option>

      {
        categories.map(
          (category) => (

            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          )
        )
      }

    </select>
  );
}

export default CategoryFilter;