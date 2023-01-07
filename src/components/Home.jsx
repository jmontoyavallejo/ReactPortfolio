import React from 'react'
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-scroll";


const Home = () => {
    return (
        <div name="home" className='h-screen w-full 
        bg-gradient-to-b from-black via-black to bg-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex 
            flex-col items-center justify-center h-full px-4
            md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold
                    text-white'>
                        Software developer and data scientist
                    </h2>
                    
                    <ul class="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400">
                        <li>D.O.B   :  05-DIC-1995</li>
                        <li>MOBILE :   +57 3207452896</li>
                        <li>ADDRESS:     Medellin (Antioquia), Colombia.</li>
                        <li>E-MAIL :     jpmvallejo@gmail.com</li>
                        <li>LANGUAGE :   English, Spanish  </li>
                    </ul>
                    <div>
                        <Link 
                        to='portfolio' 
                        smooth 
                        duration={500} className='group text-white w-fit px-6 py-3 my-2 flex
                         items-center  rounded-md bg-gradient-to-r from-cyan-500
                         to-blue-500'>
                             Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight 
                                size={25} 
                                className='ml-1'/>
                            </span>
                        </Link>
                        
                    </div>
                </div>
                <div>
                    <img src={HeroImage} 
                    alt='my profile' 
                    className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home