import React from 'react'
import datacamp from '../assets/portfolio/datacamp.png'
import front from '../assets/portfolio/front.png'
import list from '../assets/portfolio/list.png'
import datavisualization from '../assets/portfolio/datavisualization.png'
import back from '../assets/portfolio/back.png'

const Portfolio = () => {

    const portfolio = [

        {
            id: 1,
            src: datavisualization,
            href:'/notebook.pdf',
            title: 'Supervised learning',
        },

        {
            id: 2,
            src: front,
            href:'https://ephemeral-lolly-5a0ff4.netlify.app/',
            title: 'ML frontend React',
        },
        {
            id: 3,
            src: back,
            href:'https://test-api-pr1g.onrender.com/docs',
            title: 'ML backend Fastapi',
        },
        {
            id: 4,
            src: datacamp, 
            href:'https://www.datacamp.com/certificate/DSA0018597955634',
            title: 'DataCamp certification',

        },
        {
            id: 5,
            src: list,
            href:'https://peppy-panda-99c598.netlify.app/',
            title: 'Components and hooks',
        },
        {
            id: 4,
            src: datacamp, 
            href:'https://www.datacamp.com/certificate/DSA0018597955634',
            title: 'DataCamp certification',
        }
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
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
                {portfolio.map(({ id, src,href,title  }) =>
                        <div key={id}className='shadow-md shadow-gray-600 rounded-lg'>
                            <img  src={src} alt="" className='rounded-md duration-200 hover:scale-105 ' />
                            <div className='flex items-center justify-center'>
                                <button   className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href}  target='_blanck'>{title}</a> </button>
                            </div>
                        </div>
                )}
                </div>



            </div>
        </div>
    )
}

export default Portfolio