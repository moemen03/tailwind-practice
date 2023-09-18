import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'
import { useState } from 'react'


const Nav = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

// bg-white shadow-3xl rounded-md fixed
  return (
    <header className={`transition-padding duration-1000 ease-in-out
                ${colorChange ? "bg-[#ffffffee] duration-500 shadow-3xl rounded-md fixed padding-x py-3 z-20 w-full" : "padding-x py-8 z-20 w-full"}`}>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={60}  />
            </a>

            <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} 
                            className='font-montserrat leading-normal text-lg font-medium text-slate-gray'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                {/* <li key={"home"}>
                    <a href="#home" className='font-montserrat leading-normal text-lg text-slate-gray'>Home</a>
                </li>
                <li key={"About Us"}>
                    <a href="#about-us" className='font-montserrat leading-normal text-lg text-slate-gray'>About Us</a>
                </li>
                <li key={"Products"}>
                    <a href="#products" className='font-montserrat leading-normal text-lg text-slate-gray'>Products</a>
                </li>
                <li key={"Contact Us"}>
                    <a href="#contact-us" className='font-montserrat leading-normal text-lg text-slate-gray'>Contact Us</a>
                </li> */}
            </ul>

            <div className='hidden max-md:block'>
                <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>

        </nav>
    </header>

    
  )
}

export default Nav
