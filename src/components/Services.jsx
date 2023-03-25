import React from 'react'
import ab1 from "../img/ser2.png"
const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-88px)]" id='home'>
      <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center'>
        {/* <p className="text-[4.5rem] font-bold md:text-[4.5rem]">Enhancing farmer's <samp className="text-green-500">Lifes</samp>  </p> */}
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        <span className='text-[2rem] font-bold md:text-[2.5rem]'>Our</span>website connects farmers with consumers who are looking for fresh and local produce. We offer a range of services to help farmers market their products, manage their orders, and deliver their goods to the customers. Our website also provides consumers with information about the farmers, their farming practices, and their products. By using our website, farmers can increase their sales and income, while consumers can enjoy high-quality and healthy food.
        </p>
      </div>
      <div className='py-2 flex-1'>
        <img src={ab1}></img>
      </div>
    </section>
  )
}

export default Services