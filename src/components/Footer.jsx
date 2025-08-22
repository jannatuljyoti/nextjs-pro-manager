import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#154D71] text-primary-content p-10">
  <aside>
    
        <Image className='rounded-full' src={'/assets/logo.jpg'} width={48} height={40} alt='icon'/> 
        
    
    <p className="font-bold">
    ProManager Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
        <div className="grid grid-flow-col gap-4">
       
          <Link
            href="https://www.youtube.com/watch?v=_xc0iJwswQ8" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current hover:text-red-500 transition-colors"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.488 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.488-8.549-4.385-8.816zM9 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </Link>

         
          <Link
            href="https://www.linkedin.com/in/jannatul-fardoush/?trk=opento_sprofile_details/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current hover:text-blue-500 transition-colors"
            >
              <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6 1.1 6 0 5 0 3.5S1.1 1 2.5 1c1.4 0 2.48 1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6v9.9h-4V15c0-2.1 0-4.9-3-4.9s-3.5 2.3-3.5 4.7v9.2h-4V8z" />
            </svg>
          </Link>

     
          <Link
            href="https://github.com/dashboard" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current hover:text-gray-200 transition-colors"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.5-1.8-1.5-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.2 1.5 4 .9.1-.9.5-1.5.9-1.8-2.5-.3-5.1-1.3-5.1-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.9 1.2 2 1.2 3.3 0 4.4-2.6 5.4-5.1 5.7.5.4 1 1.2 1 2.5v3.7c0 .4.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </Link>
        </div>
      </nav>
</footer>
  )
}
