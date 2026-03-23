import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AdminContext } from "./context/AdminContext";
import DoctorsList from "./pages/Admin/DoctorsList";
import AddDoctors from "./pages/Admin/AddDoctors";
import AllAppoinment from "./pages/Admin/AllAppoinment";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      {/* Your admin / protected content here */}
      <ToastContainer />
      <Navbar></Navbar>
      <div className="flex min-h-screen">
        <Sidebar></Sidebar>
        <Routes>
          {/* Admin Routes */}
          <Route path="/" element={<></>}></Route>
          <Route path="/admin-dashboard" element={<Dashboard />}></Route>
          <Route path="/all-appoinments" element={<AllAppoinment />}></Route>
          <Route path="/add-doctors" element={<AddDoctors />}></Route>
          <Route path="/doctor-list" element={<DoctorsList />}></Route>

          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />}></Route>
          <Route path="/doctor-profile" element={<DoctorProfile />}></Route>
          <Route path="/doctor-appointments" element={<DoctorAppointments />}></Route>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
