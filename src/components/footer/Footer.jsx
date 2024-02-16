import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const icons = [
    {
      id:1,
      icon: <FaFacebook />,
    },
    {
      id:2,
      icon: <FaTwitter />,

    },
    {
      id:3,
      icon: <FaLinkedin />,

    },
    {
      id:4,
      icon: <FaInstagram />,
    }
  ]

function Footer() {
  return (
    <div className='flex justify-between justify-items-center items-center mb-15'>
        <div className='text-white p-5'>
        <a href="#" title="Trydo" rel="home"> <img decoding="async" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/http://rainbowit.net/themes/trydo/wp-content/themes/trydo/assets/images/logo/logo.png" alt="Trydo" width={'170px'}/> </a>
        </div>
        
        
        <div className='flex justify-between gap-4  justify-items-center '>
          {
            icons.map((item) => {
              return <div className=' border-2 p-4 mb-5 rounded-full hover:border-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-2 duration-500 text-white mt-9   hover:bg-red-500 '  key={item.id}>{item.icon}</div>
            })
          }
        </div>
        <div className='text-white p-5'>
        <p>© 2022. All rights reserved by <a href="#">Rainbow-Themes.</a></p>
        </div>

      </div>
  )
}

export default Footer;