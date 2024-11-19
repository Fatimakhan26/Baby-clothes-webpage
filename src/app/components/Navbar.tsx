import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <header className="text-white body-font bg-cyan-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Image
     src={require("../../../public/logo.jpg")}
     alt="logo"
     width={40}
     height={40}
     />
      <span className="ml-3 text-2xl font-bold text-white">Tiny Feet Wear</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-white">Home</Link>
      <Link  href= {"#about"} className="mr-5 hover:text-white">About</Link>
      <Link href={"#Product"} className="mr-5 hover:text-white">Product</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-white">Contact</Link>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Navbar
 