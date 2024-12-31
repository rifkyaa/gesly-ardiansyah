import { BiArrowBack } from "react-icons/bi"
import Link from "next/link"

const NavProject = () => {
  return (
    <nav className="bg-primaryLight dark:bg-primaryDark flex justify-between items-center py-5 mb-6 text-primaryDark dark:text-primaryLight">
        <Link href="/">
            <BiArrowBack className="text-2xl"/>
        </Link>
        <div className="">
            <Link href="/" className="font-poppins">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="text-[#9e9e9e] dark:text-gray-400 font-poppins">All-Project</Link>
        </div>
    </nav>
  )
}

export default NavProject