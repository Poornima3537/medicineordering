import {
  Link,
} from "react-router-dom";

function MedicineCard({
  medicine,
  handleAddToCart,
  showAddToCart = true,
}) {

  return (

    <div className=
      "card shadow h-100"
    >

      <div className=
        "card-body"
      >

        <Link
          to={`/medicines/${medicine.id}`}
          className="text-decoration-none"
        >

          <h5 className=
            "card-title"
          >
            {medicine.name}
          </h5>

        </Link>

        <p className=
          "card-text"
        >
          {medicine.description}
        </p>

        <p>
          <strong>
            Manufacturer:
          </strong>{" "}
          {medicine.manufacturer}
        </p>

        <p>
          <strong>
            Price:
          </strong>{" "}
          ₹{medicine.price}
        </p>

        <p>
          <strong>
            Stock:
          </strong>{" "}
          {medicine.stockQuantity}
        </p>

        <p>
          <strong>
            Category:
          </strong>{" "}
          {medicine.categoryName}
        </p>

        <p>
          <strong>
            Dosage:
          </strong>{" "}
          {medicine.dosageValue}
        </p>

        <p>
          <strong>
            Packaging:
          </strong>{" "}
          {medicine.packagingType}
        </p>

        {
          medicine.prescriptionRequired
          && (
            <span className=
              "badge bg-danger mb-3"
            >
              Prescription Required
            </span>
          )
        }

        {
          showAddToCart
          && (
            <button
              className=
              "btn btn-primary w-100 mt-3"
              onClick={() =>
                handleAddToCart(
                  medicine.id
                )
              }
            >
              Add To Cart
            </button>
          )
        }

      </div>

    </div>
  );
}

export default MedicineCard;
