import { useState, } from 'react';
import { navbar } from '../../Constants/navigation'
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
    const scrollToSection = (selector) => {
        const target = document.querySelector(selector);
        if (!target) return console.warn('No element for', selector);

        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(target, true, 'top 100px');
        } else {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-4 z-40 mx-auto w-fit max-w-[calc(100% )] rounded-full bg-white px-4 py-3 shadow sm:px-6 sm:py-4">
            <ul className="flex items-center justify-center gap-3 sm:gap-8">
                {navbar.map((item) => (
                    <li key={item.path} className='outline-0'>
                        <a
                            href={item.path}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.path);
                            }}
                            className="group relative capitalize font-medium text-sm sm:text-[1.2rem] outline-0"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navbar