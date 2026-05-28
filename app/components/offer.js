import React from 'react'
import Link from 'next/link';

const Offer = () => {
  return (
    <>
     <section className='Offer mt-20'>
        <div className='block'>
            <h1 className='text-center text-gray-900 font-bold text-[40px] mb-2 font-[family-name:var(--font-poppins)]'>Have a Project?</h1>
            <p className='text-center font-semibold text-gray-700 text-[18px] font-[family-name:var(--font-inter)]'>Lets collaborate to bring your next digital product to life.</p>
            <Link href='/Contact'>
            <button className="mt-4 block m-auto mb-5 bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded-[6px] text-white cursor-pointer font-bold hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-[family-name:var(--font-sora)]" >
                Get in Touch
            </button>
            </Link>
        </div>
     </section>
    </>
  )
}

export default Offer
