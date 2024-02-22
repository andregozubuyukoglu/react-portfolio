import React from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../img/logo.png"

export default function Header() {
  const location = useLocation()

  return (
    <div className="bg-gradient-to-b from-gray-500  sticky top-0 z-50 py-1">
      <header className="flex justify-between items-center px-80">
        <div className="mr-10">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20" />
          </Link>
        </div>
        <div>
          <Link to="/contact" className="sm:text-green-500 md:text-red-700">
            <h1>AVAILABLE FOR WORK</h1>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-14">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
