import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FoodDeliveryHome from "./components/homepage";
import SignupPage from "./components/signup";
import LoginPage from "./components/loginpage";
import VerifyOtpPage from "./components/verifyOtppage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FoodDeliveryHome />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        {/* Add more routes as needed, e.g. MenuPage, OrderPage */}
      </Routes>
    </Router>
  );
}
