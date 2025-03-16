import React from 'react'
import { Mail,    Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { FacebookOutlined, WhatsApp } from '@mui/icons-material'



const ContactBar = () => {
    const {pathname} = useLocation()
    console.log(pathname === '/')
  return (
    <header className="bg-gray-600 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Email section */}
        <div className="block items-center sm:flex">
          <div className='flex'>

          
          <Mail className="h-5 w-5 mr-2" />
          <a href='mailto:bhaaratagrotech@gmail.com' className="text-sm hover:underline mr-2 md:mr-4">
            bhaaratagrotech@gmail.com
          </a>
          </div>
          <div className='flex'>
          <Phone className="h-5 w-5 mr-2" />
          <a href="tel:+919814551819"  className="text-sm  hover:underline mr-2 md:mr-4">
            9814551819
          </a>
          </div>
          <div className='flex'>
          <Phone className="h-5 w-5 mr-2" />
          <a href="tel:+919888503966" className="text-sm  hover:underline">
            9888503966
          </a>
          </div>
        </div>
        

        {/* Social media icons */}
        <div className="flex space-x-1 gap-1  items-center    sm:flex">
          <div className='sm:flex space-x-4'>
          <Link to="https://wa.me/9814551819" rel="noopener noreferrer" aria-label="Facebook">
            <WhatsApp className="h-4 w-5 hover:text-blue-400" />
          </Link>
          <Link to="https://www.facebook.com/bhaaratagrotech" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookOutlined className="h-5 w-5 hover:text-blue-400" />
          </Link>
          
          
         
{/*           
          
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 mt-1 hover:text-pink-400" />
          </Link>
         */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default ContactBar

