// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Main from "./layout/Main";
// import Shop from "./pages/shop/Shop";
// import MyNavbar from "./components/MyNavbar";
// import Footerzz from "./components/Footerzz";
// import Signup from "./components/Signup";
// import AuthProvider, { AuthContext } from "./components/contexts/AuthProvider";
// import { useContext } from "react";

// function App() {
//   const { loading } = useContext(AuthContext);
//   return (
//     <AuthProvider>
//       <AppContent loading={loading} />
//     </AuthProvider>
//   );
// }

// function AppContent({ loading }) {
//   return (
//     <div>
//       {loading ? (
//         <p>Loading.......</p>
//       ) : (
//         <>
//           <MyNavbar />
//           <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="/menu" element={<Shop />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//           <Footerzz />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// App.jsx

import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Shop from "./pages/shop/Shop";
import MyNavbar from "./components/MyNavbar";
import Footerzz from "./components/Footerzz";
import Signup from "./components/Signup";
import AuthProvider, { AuthContext } from "./components/contexts/AuthProvider";
import UpdateProfile from "./components/Dashboard/UpdateProfile";

function App() {
  const { loading } = useContext(AuthContext);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center my-72"> 
          <span className="loading loading-spinner loading-xs"></span>
          <span className="loading loading-spinner loading-sm"></span>
          <span className="loading loading-spinner loading-md"></span>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      )}
    </div>
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
        <Route path="/update-profile" element={<UpdateProfile/>} />
      </Routes>
      <Footerzz />
    </>
  );
}

export default App;
