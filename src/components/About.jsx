import React from 'react'
import ab1 from "../img/ab1.png"
const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-88px)]" id='home'>
      <div className='py-2 flex-1 flex flex-col items-start md:items-center justify-center'>
        {/* <p className="text-[4.5rem] font-bold md:text-[4.5rem]">Enhancing farmer's <samp className="text-green-500">Lifes</samp>  </p> */}
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        <span className='text-[2rem] font-bold md:text-[2.5rem]'>We</span> are a team of passionate people who believe in the power of local and sustainable agriculture. We created this website to connect farmers with consumers who want to buy fresh, healthy and organic products directly from the source. Our mission is to support small-scale farmers who care about the environment and animal welfare, and to help consumers access quality food at fair prices. Whether you are looking for fruits, vegetables, dairy, meat, eggs, honey or other products, you can find them on our website and order them with a few clicks. You can also learn more about the farmers who grow or produce them, their farming practices and their stories. We hope you enjoy using our website and discover the benefits of buying local and sustainable food.
        </p>
      </div>
      <div className='py-2 flex-1'>
        <img src={ab1}></img>
      </div>
    </section>
  )
}

export default About