import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute
from "../components/ProtectedRoute";

import AdminRoute
from "../components/AdminRoute";

/* PUBLIC PAGES */

import Home
from "../pages/Home";

import Login
from "../pages/Login";

import Register
from "../pages/Register";

import Medicines
from "../pages/Medicines";

import NotFound
from "../pages/NotFound";

/* USER PAGES */

import Cart
from "../pages/Cart";

import Checkout
from "../pages/Checkout";

import Orders
from "../pages/Orders";

import UploadPrescription
from "../pages/UploadPrescription";

import PrescriptionStatus
from "../pages/PrescriptionStatus";

/* ADMIN PAGES */

import AdminDashboard
from "../pages/AdminDashboard";

import ManageMedicines
from "../pages/ManageMedicines";

import AddMedicine
from "../pages/AddMedicine";

import EditMedicine
from "../pages/EditMedicine";

import ManageOrders
from "../pages/ManageOrders";

import ManagePrescriptions
from "../pages/ManagePrescriptions";

import ManageCategories
from "../pages/ManageCategories";

import ManageDosages
from "../pages/ManageDosages";

import ManagePackagings
from "../pages/ManagePackagings";

import ManageUsers
from "../pages/ManageUsers";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
  path="/medicines/:id"
  element={<MedicineDetails />}
/>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/medicines"
          element={<Medicines />}
        />

        {/* USER ROUTES */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>

              <Cart />

            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>

              <Checkout />

            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>

              <Orders />

            </ProtectedRoute>
          }
        />

        <Route
          path="/upload-prescription"
          element={
            <ProtectedRoute>

              <UploadPrescription />

            </ProtectedRoute>
          }
        />

        <Route
          path="/prescription-status"
          element={
            <ProtectedRoute>

              <PrescriptionStatus />

            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}

        <Route
          path="/admin"
          element={
            <AdminRoute>

              <AdminDashboard />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/medicines"
          element={
            <AdminRoute>

              <ManageMedicines />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/add-medicine"
          element={
            <AdminRoute>

              <AddMedicine />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/edit-medicine/:id"
          element={
            <AdminRoute>

              <EditMedicine />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminRoute>

              <ManageOrders />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/prescriptions"
          element={
            <AdminRoute>

              <ManagePrescriptions />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/categories"
          element={
            <AdminRoute>

              <ManageCategories />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/dosages"
          element={
            <AdminRoute>

              <ManageDosages />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/packagings"
          element={
            <AdminRoute>

              <ManagePackagings />

            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>

              <ManageUsers />

            </AdminRoute>
          }
        />

        {/* NOT FOUND */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;