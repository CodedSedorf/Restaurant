import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Shop from "./pages/shop/Shop";
import MyNavbar from "./components/MyNavbar";
import Footerzz from "./components/Footerzz";
import Signup from "./components/Signup";

function App() {
  const location = useLocation();

  // Check if the current route is the sign-up page
  const isSignUpPage = location.pathname === "/signup";

  return (
    <>
      {!isSignUpPage && <MyNavbar />}{" "}
      {/* Display navbar if not on the sign-up page */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!isSignUpPage && <Footerzz />}{" "}
      {/* Display footer if not on the sign-up page */}
    </>
  );
}

export default App;
