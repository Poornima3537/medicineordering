import {
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  toast,
} from "react-toastify";

import MedicineCard
from "../components/MedicineCard";

import SearchBar
from "../components/SearchBar";

import {
  AuthContext,
} from "../context/AuthContext";

import cartService
from "../service/cartService";

import medicineService
from "../service/medicineService";

function Medicines() {

  const { user } =
    useContext(AuthContext);

  const [medicines,
    setMedicines] =
    useState([]);

  const [search,
    setSearch] =
    useState("");

  useEffect(() => {

    fetchMedicines();

  }, []);

  const fetchMedicines =
    async () => {

    try {

      const data =
        await medicineService
          .getAllMedicines();

      setMedicines(data);

    } catch (error) {

      toast.error(
        "Failed to load medicines"
      );
    }
  };

  const filteredMedicines =
    useMemo(() => {

      const searchText =
        search.trim().toLowerCase();

      if (!searchText) {
        return medicines;
      }

      return medicines.filter(
        (medicine) =>
          medicine.name
            ?.toLowerCase()
            .includes(searchText) ||
          medicine.description
            ?.toLowerCase()
            .includes(searchText) ||
          medicine.manufacturer
            ?.toLowerCase()
            .includes(searchText)
      );

    }, [
      medicines,
      search,
    ]);

  const handleAddToCart =
    async (medicineId) => {

    if (user?.role !== "USER") {
      return;
    }

    try {

      await cartService
        .addToCart(medicineId);

      toast.success(
        "Medicine added to cart"
      );

    } catch (error) {

      toast.error(
        "Failed to add to cart"
      );
    }
  };

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Medicines
      </h2>

      <div className="mb-4">

        <SearchBar
          search={search}
          handleSearch={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {
        filteredMedicines.length > 0
        ? (
          <div className="row g-4">

            {
              filteredMedicines.map(
                (medicine) => (

                  <div
                    className="col-md-4"
                    key={medicine.id}
                  >

                    <MedicineCard
                      medicine={medicine}
                      handleAddToCart=
                      {handleAddToCart}
                      showAddToCart=
                      {user?.role !== "ADMIN"}
                    />

                  </div>
                )
              )
            }

          </div>
        ) : (
          <h4>
            No medicines found
          </h4>
        )
      }

    </div>
  );
}

export default Medicines;
