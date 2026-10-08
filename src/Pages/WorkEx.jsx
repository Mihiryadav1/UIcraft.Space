import React, { useLayoutEffect, useRef } from 'react'
import SplitTextComponent from '../Components/UI/SplitText'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkEx = ({ workImageTargetRef }) => {

    return (
        <div className='min-h-screen'>
            <SplitTextComponent type='chars' delay={1}>
                <h1 className='text-5xl md:text-[4vw] font-bold mb-1'>
                    Work Experience
                </h1>
            </SplitTextComponent>
            <div className="w-full py-20 my-20">
                {/* Desktop / tablet */}
                <img
                    src="./timeline.svg"
                    alt="Timeline"
                    className="hidden md:block w-full"
                />

                {/* Mobile */}
                <img
                    src="./timelineMobile.svg"
                    alt="Timeline"
                    className="block md:hidden w-full"
                />
            </div>

        </div>
    )
}

export default WorkEx