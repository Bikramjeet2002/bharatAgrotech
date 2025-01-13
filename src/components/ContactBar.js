import React from 'react'
import { Mail, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react'
import { Link, useLocation, useParams } from 'react-router-dom'


const ContactBar = () => {
    const {pathname} = useLocation()
    console.log(pathname == '/')
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
          <a href="#" className="text-sm  hover:underline mr-2 md:mr-4">
            9814551819
          </a>
          </div>
          <div className='flex'>
          <Phone className="h-5 w-5 mr-2" />
          <a href="#" className="text-sm  hover:underline">
            9814551819
          </a>
          </div>
        </div>
        

        {/* Social media icons */}
        <div className="flex space-x-2 gap-1   sm:flex">
          <div className='sm:flex space-x-4'>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-blue-400" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-blue-400" />
          </Link>
          </div>
          <div className='sm:flex space-x-4'>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-pink-400" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-blue-400" />
          </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ContactBar

