import React from "react";
import { Link } from "react-router-dom";

export default function FoodDeliveryHome() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
     <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">YumExpress</h1>
          <nav className="space-x-6 text-gray-700 font-medium flex items-center">
            <Link to="/" className="hover:text-red-600">Menu</Link>
            <Link to="/order" className="hover:text-red-600">Order Now</Link>
            <a href="#contact" className="hover:text-red-600">Contact</a>

            <Link
              to="/login"
              className="ml-6 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Login / Signup
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Delicious food delivered fast to your door
        </h2>
        <p className="text-gray-700 max-w-xl mb-10">
          Explore your favorite dishes from local restaurants and get them delivered hot and fresh.
        </p>
        <Link
          to="/menu"
          className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
         Browse More
        </Link>

        {/* Food categories */}
        <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
          {[
            {
              name: "Pizza",
              img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
            },
            {
              name: "Burgers",
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "Sushi",
              img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "Desserts",
              img: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
            }
          ].map(({ name, img }) => (
            <div key={name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={img} alt={name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-20">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © 2025 YumExpress. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
