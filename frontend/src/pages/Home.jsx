import {
  Link,
} from "react-router-dom";

function Home() {

  return (

    <div>

      {/* HERO SECTION */}

      <div className=
        "bg-primary text-white py-5"
      >

        <div className=
          "container text-center"
        >

          <h1 className=
            "display-4 fw-bold"
          >
            Pharmacy Ordering Portal
          </h1>

          <p className=
            "lead mt-3"
          >
            Order medicines easily with
            prescription validation and
            fast delivery.
          </p>

          <Link
            to="/medicines"
            className=
            "btn btn-light btn-lg mt-3"
          >
            Browse Medicines
          </Link>

        </div>

      </div>

      {/* FEATURES SECTION */}

      <div className=
        "container my-5"
      >

        <div className=
          "row g-4"
        >

          <div className=
            "col-md-4"
          >

            <div className=
              "card shadow h-100"
            >

              <div className=
                "card-body text-center"
              >

                <h4>
                  Medicines
                </h4>

                <p>
                  Browse medicines from
                  centralized medicine
                  management portal.
                </p>

              </div>

            </div>

          </div>

          <div className=
            "col-md-4"
          >

            <div className=
              "card shadow h-100"
            >

              <div className=
                "card-body text-center"
              >

                <h4>
                  Prescription Validation
                </h4>

                <p>
                  Upload prescriptions
                  for prescription-required
                  medicines.
                </p>

              </div>

            </div>

          </div>

          <div className=
            "col-md-4"
          >

            <div className=
              "card shadow h-100"
            >

              <div className=
                "card-body text-center"
              >

                <h4>
                  Order Tracking
                </h4>

                <p>
                  Track order status from
                  pending to delivery.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CATEGORY SECTION */}

      <div className=
        "container my-5"
      >

        <h2 className=
          "text-center mb-4"
        >
          Medicine Categories
        </h2>

        <div className=
          "row g-4"
        >

          <div className=
            "col-md-3"
          >

            <div className=
              "card text-center shadow"
            >

              <div className=
                "card-body"
              >

                <h5>
                  Tablets
                </h5>

              </div>

            </div>

          </div>

          <div className=
            "col-md-3"
          >

            <div className=
              "card text-center shadow"
            >

              <div className=
                "card-body"
              >

                <h5>
                  Syrups
                </h5>

              </div>

            </div>

          </div>

          <div className=
            "col-md-3"
          >

            <div className=
              "card text-center shadow"
            >

              <div className=
                "card-body"
              >

                <h5>
                  Wellness
                </h5>

              </div>

            </div>

          </div>

          <div className=
            "col-md-3"
          >

            <div className=
              "card text-center shadow"
            >

              <div className=
                "card-body"
              >

                <h5>
                  Injections
                </h5>

              </div>

            </div>

          </div>

        </div>

      </div>

      

    

    </div>
  );
}

export default Home;