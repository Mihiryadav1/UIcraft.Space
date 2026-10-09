import { useEffect } from 'react';
import Cube from '../Components/UI/Cube'
import gsap from "gsap";
import SplitTextComponent from '../Components/UI/SplitText';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const Home = () => {
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
    useEffect(() => {

        gsap.from(".hero-greet", {
            y: 80,
            opacity: 0,
        })

        gsap.from(".hero-desc", {
            y: 80,
            opacity: 0,
            delay: 1.8
        })

    }, []);
    return (
        <div className='min-h-[120vh] md:h-screen relative' id="home">

            <div className="text-center pt-60 lg:pt-30">
                <p className="text-lg lg:text-[2rem] mb-4 hero-greet">
                    Hi, I'm Mihir 👋
                </p>
                <SplitTextComponent type='words'>
                    <h1 className="text-5xl lg:text-[6vw] leading-[1.2] font-semibold tracking-[-0.04em]">
                        A Frontend Engineer,
                        <br />
                        building interactive digital experiences.
                    </h1>
                </SplitTextComponent>
                <p className="hero-desc text-base lg:text-xl leading-relaxed sm:max-w-[60%] mx-auto mt-8 text-center">
                    I build thoughtful digital experiences where code,
                    design, and motion come together.
                </p>
                <div className="flex items-center justify-center mt-7 lg:mt-5 gap-4">
                    {/* <button className='px-6 py-3  text-lg rounded-3xl border transition-colors bg-black  text-white duration-400'>
                        Resume <span></span>
                    </button> */}
                    <button
                        onClick={() => scrollToSection("#work")}
                        className="px-6 py-3 text-lg rounded-full border bg-transparent transition-colors hover:bg-orange-400 duration-500"
                    >
                        My Work

                    </button>
                    <div className='flex items-center gap-2 border px-6 py-3 rounded-full'>
                        <span>Available for work</span>
                        <span class="relative flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                        </span>

                    </div>
                </div>

            </div>

            <Cube className="left-[5%] top-[18%] w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-xl bg-orange-500 border" />
            <Cube className="left-[8%] bottom-[15%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-blue-700" />
            <Cube className="right-[5%] top-[25%] w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full bg-green-700" />
            <Cube className="right-[10%] bottom-[10%] w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-pink-500" />

        </div>
    )
}

export default Home