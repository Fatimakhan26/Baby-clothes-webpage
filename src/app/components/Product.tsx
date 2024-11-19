import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Product = () => {
  return (
    <div id='Product'>
    <section className="text-black body-font bg-cyan-100 -mt-20">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 -mt-16">
        Cool Products
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/*projects*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/dress3.jpg')} height={400}
            alt="perfume1"
    
          />
        </div>
        <div className='bg-cyan-100' >
                        <span >800RS</span>
                  
                    </div>
                    <button className='bg-cyan-100'>Add to Cart</button>
         </div>




         <div className=" lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/dress 2.webp')} height={400}
            alt="perfume2"
            
            
          />
        </div>
        <div   className='bg-cyan-100' >
                        <span>800RS</span>
                        
                    </div>
                    <button className='bg-cyan-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/dress 4.webp')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-cyan-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-cyan-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/dress 5.jpg')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-cyan-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-cyan-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/babies-coat-pant.jpeg')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-cyan-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-cyan-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/dress.jpg')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-cyan-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-cyan-100'>Add to Cart</button>
         </div>

         
      </div>

     
      


      
</div>
</section>
</div>
  )
}

export default Product