import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import {
  AuthContext,
} from "../context/AuthContext";

import authService
from "../services/authService";

function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useContext(AuthContext);

  const [formData,
    setFormData] = useState({

    email: "",
    password: "",
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

      const data =
        await authService.login(
          formData
        );

      login(data);

      toast.success(
        "Login Successful"
      );

      if (
        data.role === "ADMIN"
      ) {

        navigate("/admin");

      } else {

        navigate("/");
      }

    } catch (error) {

      toast.error(
        error.response?.data?.message
        || "Login Failed"
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
          "col-md-5"
        >

          <div className=
            "card shadow p-4"
          >

            <h2 className=
              "text-center mb-4"
            >
              Login
            </h2>

            <form
              onSubmit=
              {handleSubmit}
            >

              <div className=
                "mb-3"
              >

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className=
                  "form-control"
                  value=
                  {formData.email}
                  onChange=
                  {handleChange}
                  required
                />

              </div>

              <div className=
                "mb-3"
              >

                <label>
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className=
                  "form-control"
                  value=
                  {formData.password}
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
                Login
              </button>

            </form>

            <p className=
              "text-center mt-3"
            >

              Don't have an account?

              <Link to="/register">

                Register

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;