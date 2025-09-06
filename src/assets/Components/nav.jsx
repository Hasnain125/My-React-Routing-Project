import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-green-600 text-white p-4   hover:bg-green-700 transition">
      <div className="flex justify-between items-center">
        
        <h1 className="text-xl font-bold">My Routing Project</h1>

       
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
          <li><Link to="/register" className="hover:text-gray-200">Register</Link></li>
          <li><Link to="/protects" className="hover:text-gray-200">Protects</Link></li>
        </ul>

      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-2">
        <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
          <li><Link to="/register" className="hover:text-gray-200">Register</Link></li>
          <li><Link to="/protects" className="hover:text-gray-200">Protects</Link></li>
        </ul>
      )}
    </nav>
  );
}
