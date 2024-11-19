import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-cyan-100">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-7/12 md:w-3/6 w-5/6 mb-10 -mt-24 object-cover object-center rounded h-72"
      alt="hero"
      src={require("../../../public/kids.jpg")}
      
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
        About Us
      </h1>
      <p className="mb-8 leading-relaxed text-justify">
        All those ultra caring momtastic ladies who love details, 
        this is time to say bye to typical kids clothing and shout out loud buy buy from Kiddie's quintessentially classy kids range.This Swedish lifestyle brand offers a full-range wardrobe for children from 0 months to 8 years.
        We offer quality, aesthetics, style, and rich colors all within your budget.
        Kid's online shopping from coziness of your home is re-defined.
      </p>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
