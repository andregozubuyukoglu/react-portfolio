import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-between px-8">
        <h1 className="">Designed and Developed by Andre Gözübüyükoğlu</h1>
        <div className="">Copyright &copy; {currentYear}AG</div>
        <ul className="flex justify-between space-x-4">
          <li>
            <a href="">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
