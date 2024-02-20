import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <div className="space bg-white border-b shadow-sm sticky top-0 z-50 p-2 ">
        <header className="flex justify-between items-end px-3 max-w-6xl mx-auto">
          <div className="">
            <Link to="/">Logo</Link>
          </div>
          <div className="space-x-4 ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </header>
      </div>
    </>
  )
}
