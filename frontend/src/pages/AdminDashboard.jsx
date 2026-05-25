import {
  Link,
} from "react-router-dom";

function AdminDashboard() {

  return (

    <div className=
      "container mt-5"
    >

      <h2 className=
        "text-center mb-5"
      >
        Admin Dashboard
      </h2>

      <div className=
        "row g-4"
      >

        <div className=
          "col-md-4"
        >

          <Link
            to="/admin/medicines"
            className=
            "text-decoration-none"
          >

            <div className=
              "card shadow text-center p-4"
            >

              <h4>
                Manage Medicines
              </h4>

            </div>

          </Link>

        </div>

        <div className=
          "col-md-4"
        >

          <Link
            to="/admin/orders"
            className=
            "text-decoration-none"
          >

            <div className=
              "card shadow text-center p-4"
            >

              <h4>
                Manage Orders
              </h4>

            </div>

          </Link>

        </div>

        <div className=
          "col-md-4"
        >

          <Link
            to="/admin/prescriptions"
            className=
            "text-decoration-none"
          >

            <div className=
              "card shadow text-center p-4"
            >

              <h4>
                Manage Prescriptions
              </h4>

            </div>

          </Link>

        </div>

        <div className=
          "col-md-4"
        >

          <Link
            to="/admin/categories"
            className=
            "text-decoration-none"
          >

            <div className=
              "card shadow text-center p-4"
            >

              <h4>
                Manage Categories
              </h4>

            </div>

          </Link>

        </div>

        <div className=
          "col-md-4"
        >

          <Link
            to="/admin/dosages"
            className=
            "text-decoration-none"
          >

            <div className=
              "card shadow text-center p-4"
            >

              <h4>
                Manage Dosages
              </h4>

            </div>

          </Link>

        </div>

        <div className=
          "col-md-4"
        >

          <Link
            to="/admin/packagings"
            className=
            "text-decoration-none"
          >

            <div className=
              "card shadow text-center p-4"
            >

              <h4>
                Manage Packagings
              </h4>

            </div>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;