import React from 'react'
import Slider from "react-slick";
import image1 from '../../assets/images/portfolio-01.jpg'
import image2 from '../../assets/images/portfolio-02.jpg'
import image3 from '../../assets/images/portfolio-03.jpg'
import image4 from '../../assets/images/portfolio-04.jpg'
import image5 from '../../assets/images/portfolio-05.jpg'
import image6 from '../../assets/images/portfolio-06.jpg'





function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    const portfolio = [
        {
            id: 1,
            path: image1,
            title: "Development",
            heading: "Getting tickets to the next show"
        },
        {
            id: 2,
            path: image2,
            title: "Freelancer",
            heading: "The Language of Developer"
        },
        {
            id: 3,
            path: image3,
            title: "Development",
            heading: "How To Find The Right Agency For Your Specific Product"
        },
        {
            id: 4,
            path: image4,
            title: "Mobile App",
            heading: "The Ultimate Guide To Agency"
        },
        {
            id: 5,
            path: image5,
            title: "Graphic",
            heading: "How To Turn Your Agency From Zero To Hero"
        },
        {
            id: 6,
            path: image6,
            title: "Development",
            heading: "Getting tickets to the next show"
        }


    ]


    return (
        <>
            <div className='bg-slate-50   p-20'>

                <div className='my-10 '>
                    <div className='my-10 mx-5'>
                        <h1 className='text-6xl font-bold mb-3 '>Our Portfolio</h1>
                        <p className='my-4'>There are many variations of passages of Lorem Ipsum available, <br />
                            but the majority have suffered alteration.</p>
                    </div>

                    <div className=" ">
                        <Slider {...settings}>

                            {portfolio.map(item => (
                                <div key={item.id} className='px-5 my-8 relative hover:scale-110 ease-in-out duration-300 delay-75'>

                                    <div className=' relative  rounded-xl'  >

                                    <img src={item.path} alt="Portfolio Image" className='rounded-xl' />
                                        <div className=' absolute rounded-xl hover:bg-gradient-to-r from-[#f6004c]  to-[#000]  opacity-90 z-10 w-full h-full top-0 left-0 '></div>
                                    </div>
                                    <div className='absolute bottom-5 p-5 left-0 z-20 rounded '>
                                        <p className='text-white px-5 mb-4' >{item.title}</p>
                                        <h2 className='text-white px-5 mb-4 text-3xl' >{item.heading}</h2>
                                        <div><button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 duration-300 text-white mt-9 ms-6 px-6 py-2 outline outline-2 outline-offset-2 hover:bg-red-500 hover:outline-0 rounded '>CASE STUDY</button></div>

                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio