import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Ball = () => {
    const ballRef = useRef(null);
    const pathRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(ballRef.current, {
                motionPath: {
                    path: pathRef.current,
                },

                ease: "none",

                scrollTrigger: {
                    trigger: svgRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1.5,
                },
            });
        }, svgRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="h-screen w-full left-0 my-20 py-20">

            <svg
                ref={svgRef}
                viewBox="0 0 1283 614"
                className="w-full"
            >

                {/* YOUR EXISTING TIMELINE */}
                <path
                    ref={pathRef}
                    d="M148 233C188.667 165.5 315.9 45.9 499.5 107.5C729 184.5 708.5 253 922 177.5C1135.5 102 1243.5 324.5 1119.5 441.5"
                    stroke="black"
                    strokeWidth="3"
                    fill="none"
                />

                {/* BALL */}
                <circle
                    ref={ballRef}
                    r="20"
                    fill="orange"
                />

                {/* YOUR OTHER SVG CONTENT */}

            </svg>

        </div>
    );
};

export default Ball;