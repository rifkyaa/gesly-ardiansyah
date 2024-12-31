import Link from "next/link"

const Footer = () => {
  return (
    <footer className="absolute bottom-0 py-5 text-primaryLight dark:text-primaryDark w-full border-t border-primaryLight dark:border-primaryDark flex justify-center items-center gap-2">
      <div className=" flex md:flex-row flex-col gap-1 justify-center items-center">
        <span>&#169; 2024 Gesly Ardiansyah. Proudly created with</span>
        <Link target="_blank" href="https://sircode.web.id/" >sircode.web.id</Link></div>
    </footer>
  )
}

export default Footer