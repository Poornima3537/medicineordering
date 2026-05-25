import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import authService
from "../services/authService";

function Register() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] = useState({

    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
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

      await authService.register(
        formData
      );

      toast.success(
        "Registration Successful"
      );

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message
        || "Registration Failed"
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
              Register
            </h2>

            <form
              onSubmit=
              {handleSubmit}
            >

              <div className=
                "mb-3"
              >

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className=
                  "form-control"
                  value=
                  {formData.name}
                  onChange=
                  {handleChange}
                  required
                />

              </div>

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

              <div className=
                "mb-3"
              >

                <label>
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phoneNumber"
                  className=
                  "form-control"
                  value=
                  {formData.phoneNumber}
                  onChange=
                  {handleChange}
                  required
                />

              </div>

              <div className=
                "mb-3"
              >

                <label>
                  Address
                </label>

                <textarea
                  name="address"
                  className=
                  "form-control"
                  rows="3"
                  value=
                  {formData.address}
                  onChange=
                  {handleChange}
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className=
                "btn btn-success w-100"
              >
                Register
              </button>

            </form>

            <p className=
              "text-center mt-3"
            >

              Already have an account?

              <Link to="/login">

                Login

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;