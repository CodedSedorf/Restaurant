import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Shop from "./pages/shop/Shop";
import MyNavbar from "./components/MyNavbar";
import Footerzz from "./components/Footerzz";
import Signup from "./components/Signup";
import AuthProvider from "./components/contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footerzz />
    </>
  );
}

export default App;
