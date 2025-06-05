import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SEND_OTP_URL = "https://frontendazurefunc.azurewebsites.net/api/SendOtp?code=wLsW5bE5H7_Y-4XXxW3KnjE_wzkRH-Ig-yrUczczmWWAAzFuLuA-7A==";

export default function SignupPage() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function sendOtp() {
    if (!phone || !name) {
      setMessage("Please enter name and phone number");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(SEND_OTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      if (res.ok) {
        // Navigate to OTP verification page, passing phone, name, and signup flag
        navigate("/verify-otp", { state: { phone, name, isSignup: true } });
      } else {
        setMessage("Failed to send OTP");
      }
    } catch {
      setMessage("Error sending OTP");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={loading}
      />
      <button
        onClick={sendOtp}
        disabled={loading || !phone || !name}
        className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 disabled:bg-red-300"
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
