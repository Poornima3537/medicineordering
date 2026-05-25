import {
  useEffect,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import categoryService
from "../service/categoryService";

function ManageCategories() {

  const [categories,
    setCategories] =
    useState([]);

  const [name,
    setName] =
    useState("");

  useEffect(() => {

    fetchCategories();

  }, []);

  const fetchCategories =
    async () => {

    try {

      const data =
        await categoryService
          .getAllCategories();

      setCategories(data);

    } catch {

      toast.error(
        "Failed to load categories"
      );
    }
  };

  const handleAdd =
    async () => {

    try {

      await categoryService
        .addCategory({ name });

      toast.success(
        "Category Added"
      );

      setName("");

      fetchCategories();

    } catch {

      toast.error(
        "Add Failed"
      );
    }
  };

  const handleDelete =
    async (id) => {

    try {

      await categoryService
        .deleteCategory(id);

      toast.success(
        "Category Deleted"
      );

      fetchCategories();

    } catch {

      toast.error(
        "Delete Failed"
      );
    }
  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Manage Categories
      </h2>

      <div className="card p-4 shadow mb-4">

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Category Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={handleAdd}
        >
          Add Category
        </button>

      </div>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {
            categories.map(
              (category) => (

                <tr key={category.id}>

                  <td>
                    {category.id}
                  </td>

                  <td>
                    {category.name}
                  </td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(
                          category.id
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

export default ManageCategories;