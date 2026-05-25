import AppRoutes
from "./routes/AppRoutes";

import Navbar
from "./components/Navbar";

import Footer
from "./components/Footer";

import {
  ToastContainer,
} from "react-toastify";

function App() {

  return (

    <>
      <Navbar />

      <AppRoutes />

      <Footer />

      <ToastContainer
        position="top-right"
      />
    </>
  );
}

export default App;