import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="">
      <div className="flex justify-around  px-16 py-4 bg-slate-200 items-stretch">
        <h1 className="p-1">Developed by Andre Gözübüyükoğlu</h1>
        <div className="p-1">Copyright &copy; {currentYear} AG</div>
        <ul className="p-1 flex justify-between space-x-4">
          <li>
            <a
              href="https://github.com/andregozubuyukoglu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andre-g%C3%B6z%C3%BCb%C3%BCy%C3%BCko%C4%9Flu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
