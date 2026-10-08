import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const SplitTextComponent = ({ children, type = "words", delay = 0, }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const split = SplitText.create(textRef.current, {
                type,
            });

            const elements =
                type === "chars" ? split.chars : split.words;

            gsap.set(elements, {
                y: 80,
                opacity: 0,
            });

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        gsap.to(elements, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: type === "chars" ? 0.03 : 0.1,
                            ease: "power4.out",
                            delay,
                        });

                        observer.disconnect();
                    }
                },
                {
                    threshold: 0.2,
                }
            );

            observer.observe(textRef.current);

            return () => {
                observer.disconnect();
            };
        }, textRef);

        return () => ctx.revert();
    }, [type]);

    return <div ref={textRef} className="relative z-20">{children}</div>;
};

export default SplitTextComponent;