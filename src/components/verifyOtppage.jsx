import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VERIFY_OTP_URL = "https://<your-func-app>.azurewebsites.net/api/VerifyOtp";
const SAVE_USER_URL = "https://<your-func-app>.azurewebsites.net/api/SaveUser";

export default function VerifyOtpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone, name = "", isSignup = false } = location.state || {};

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function verifyOtp() {
    if (!otp) {
      setMessage("Please enter the OTP");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const verifyRes = await fetch(VERIFY_OTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      if (!verifyRes.ok) {
        setMessage("OTP verification failed");
        setLoading(false);
        return;
      }

      if (isSignup) {
        const saveRes = await fetch(SAVE_USER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, name }),
        });
        if (!saveRes.ok) {
          setMessage("Failed to save user info");
          setLoading(false);
          return;
        }
      }

      alert("OTP verified! You are now logged in.");

      // Save user info locally or just redirect (no context)
      // Optionally save to localStorage:
      localStorage.setItem(
        "user",
        JSON.stringify({ phone, name })
      );

      navigate("/");
    } catch {
      setMessage("Error verifying OTP");
    }
    setLoading(false);
  }

  if (!phone) return <p className="mt-20 text-center">No phone number provided</p>;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Verify OTP</h1>
      <p className="mb-4 text-center">OTP sent to {phone}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        disabled={loading}
      />
      <button
        onClick={verifyOtp}
        disabled={loading || !otp}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-green-300"
      >
        {loading ? "Verifying OTP..." : "Verify OTP"}
      </button>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
