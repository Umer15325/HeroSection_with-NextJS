
import Image from "next/image"
import Logo from "./logo.png"

function Header() {
  return (
    <div className="bg-white sticky top-0 h-16">
        <ul className="flex items-center justify-evenly bg-blue-900 h-16 align-middle ">
        <li className="z-10 ml-12"><Image className="mt-12" src={Logo} alt="logo" width={70}/></li>
        <li><h1 className="font-semibold text-md flex">Tution Free Education Program on Latest Technologies</h1></li>

        <span className="text-sm flex gap-16 ml-20">
        <li>Home</li>
        <li>Apply</li>
        <li>Jobs</li>
        <li>Result</li>
        <li className="flex">Courses <svg className="mt-1.5" xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#e8eaed"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg></li>                   
        </span>

        </ul>
     
    </div>
  )
}

export default Header