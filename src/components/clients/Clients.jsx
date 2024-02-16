import React from 'react'
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import brand4 from '../../assets/images/brand4.png'
import brand5 from '../../assets/images/brand5.png'
import brand6 from '../../assets/images/brand6.png'


function Clients() {
 
  const client=[
    {
      id:1,
      image:brand1
    },
    {
      id:2,
      image:brand2
    },
    {
      id:3,
      image:brand3
    },
    {
      id:4,
      image:brand4
    },
    {
      id:5,
      image:brand5
    },
    {
      id:6,
      image:brand6
    },
    {
      id:6,
      image:brand6
    },
    {
      id:6,
      image:brand6
    },
    {
      id:6,
      image:brand6
    }
  ]
   
  return (
    <>
    <div  className=' flex flex-wrap justify-center w-[1100px] gap- container mx-auto'>
      {
        client.map( item => {
            return <div key={item.id}  className=' '>
              <div className=' hover:scale-110 ease-in-out duration-300 delay-75'>
                <img src={item.image} width={'200px'} className='p-10 mx-2'/>
              </div>
            </div>
        })
      }
    </div>
    </>
  )
}

export default Clients;