import React from 'react'
import Fa1 from "../img/fa3.png"
const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-88px)]" id='home'>
      <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center'>
        <p className="text-[4.5rem] font-bold md:text-[4.5rem]">Enhancing farmer's <samp className="text-green-500">Lifes</samp>  </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        KrishiSampark is the online marketplace that helps you sell fresh and sustainable food to more customers. Create your profile, list your products, and choose your delivery options. Grow your business and join a community of farmers and consumers who care about food quality and security with KrishiSampark!
        </p>
        <button type='button' className="bg-gradient-to-br md:w-auto from-green-400 to bg-green-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"><a href='items'>Order Now</a></button>
      </div>
      <div className='py-2 flex-1'>
        <img src={Fa1}></img>
      </div>
    </section>
  )
}

export default HomeContainer