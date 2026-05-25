import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

function Navbar() {

  const {
    user,
    logout,
  } = useContext(AuthContext);

  const navigate =
    useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (

    <nav className=
      "navbar navbar-expand-lg navbar-dark bg-dark"
    >

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Pharmacy Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className=
            "navbar-toggler-icon"
          ></span>
        </button>

        <div
          className=
          "collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className=
            "navbar-nav ms-auto"
          >

            <li className=
              "nav-item"
            >
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className=
              "nav-item"
            >
              <Link
                className="nav-link"
                to="/medicines"
              >
                Medicines
              </Link>
            </li>

            {
              user &&
              user.role === "USER" && (
                <>
                  <li className=
                    "nav-item"
                  >
                    <Link
                      className="nav-link"
                      to="/cart"
                    >
                      Cart
                    </Link>
                  </li>

                  <li className=
                    "nav-item"
                  >
                    <Link
                      className="nav-link"
                      to="/orders"
                    >
                      Orders
                    </Link>
                  </li>
                </>
              )
            }

            {
              user &&
              user.role === "ADMIN" && (
                <li className=
                  "nav-item"
                >
                  <Link
                    className="nav-link"
                    to="/admin"
                  >
                    Dashboard
                  </Link>
                </li>
              )
            }

            {
              !user ? (
                <>
                  <li className=
                    "nav-item"
                  >
                    <Link
                      className="nav-link"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>

                  <li className=
                    "nav-item"
                  >
                    <Link
                      className="nav-link"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className=
                    "nav-item d-flex align-items-center"
                  >
                    <span className=
                      "navbar-text text-white me-3"
                    >
                      {user.name}
                    </span>
                  </li>

                  <li className=
                    "nav-item"
                  >
                    <button
                      className=
                      "btn btn-danger ms-2"
                      onClick=
                        {handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )
            }

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
