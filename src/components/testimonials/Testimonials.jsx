import React from 'react'
import testimonial1 from '../../assets/images/testimonial1.jpg'
import testimonial2 from '../../assets/images/testimonial2.jpg'
import testimonial3 from '../../assets/images/testimonial3.jpg'
import testimonial4 from '../../assets/images/testimonial4.jpg'
import testimonial5 from '../../assets/images/testimonial5.jpg'
import testimonial6 from '../../assets/images/testimonial6.jpg'
import testimonial7 from '../../assets/images/testimonial7.jpg'
import testimonial8 from '../../assets/images/testimonial8.jpg'

function Testimonials() {

  const testimonial = [
    {
      id: 1,
      path: testimonial1
    },
    {
      id: 2,
      path: testimonial2
    },
    {
      id: 3,
      path: testimonial3
    },
    {
      id: 4,
      path: testimonial4
    },
    {
      id: 5,
      path: testimonial5 
    },
    {
      id: 6,
      path: testimonial6
    },
    {
      id: 7,
      path: testimonial7
    },
    {
      id: 8,
      path: testimonial8
    }

  ]
  return (
    <>
      <p className="text-[40px] text-center mt-5" >Phenomenal Customer Service! I'm just starting out with,
        <br /> the team helped me so much with integrating this int<br />my website. Highly recommend.</p>
      <h6 className='text-red-600 text-[20px] text-center mt-5'>FATIMA ASRAFY <span>- COO, AMERIMAR ENTERPRISES, INC.</span></h6>
      
        
        <div className=' flex flex-wrap justify-center w-[600px] gap-10 container mx-auto mb- mt-10 '>
      
        {testimonial.map(item => (
       
      
       <img src={item.path} alt=" Testimonail image "  className=' hover:scale-110 ease-in-out duration-300 delay-75'/>
      
          
            ))}
        </div>
       

      

    </>
  )
}

export default Testimonials