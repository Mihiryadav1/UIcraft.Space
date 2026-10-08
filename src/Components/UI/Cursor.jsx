import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const handleEnter = () => {
            gsap.to(cursor, {
                width: 80,
                height: 80,
                duration: 0.4,
                ease: "power3.out",
                backgroundColor: "orange",
            });
        };

        const handleLeave = () => {
            gsap.to(cursor, {
                width: 10,
                height: 10,
                duration: 0.4,
                ease: "power3.out",
                backgroundColor: "black",
            });
        };

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);
        const images = document.querySelectorAll(".project-image");
        images.forEach((image) => {
            image.addEventListener("mouseenter", handleEnter);
            image.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-black pointer-events-none z-40"
        />
    );
};

export default Cursor;