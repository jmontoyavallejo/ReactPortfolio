import React from 'react'
import datacamp from '../assets/portfolio/datacamp.png'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import datavisualization from '../assets/portfolio/datavisualization.png'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: datacamp, 
            href:'https://www.datacamp.com/certificate/DSA0018597955634',
        },
        {
            id: 2,
            src: datavisualization,
            href:'https://app.datacamp.com/workspace/workspaces/all',
        },
        {
            id: 3,
            src: navbar,
            href:'https://www.datacamp.com/certificate/DSA0018597955634',
        },
        {
            id: 4,
            src: installNode,
            href:'https://www.datacamp.com/certificate/DSA0018597955634',
        },
        {
            id: 5,
            src: reactSmooth,
            href:'https://www.datacamp.com/certificate/DSA0018597955634',
        },
        {
            id: 6,
            src: reactWeather,
            href:'https://www.datacamp.com/certificate/DSA0018597955634',
        }
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>
                        check out some of my work right here
                    </p>
                </div>


                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolio.map(({ id, src,href  }) =>
                        <div key={id}className='shadow-md shadow-gray-600 rounded-lg'>
                            <img  src={src} alt="" className='rounded-md duration-200 hover:scale-105 ' />
                            <div className='flex items-center justify-center'>
                                <button   className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href}  target='_blanck'>Code</a> </button>
                            </div>
                        </div>
                )}
                </div>



            </div>
        </div>
    )
}

export default Portfolio