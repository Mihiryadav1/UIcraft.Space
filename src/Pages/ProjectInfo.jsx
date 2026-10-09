import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../Constants/work";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "../Components/UI/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectInfo = () => {
    const { projectId } = useParams();
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const project = projects.find(
        (item) => item.id === projectId
    );

    useGSAP(
        () => {
            if (!imageRef.current) return;

            gsap.fromTo(
                imageRef.current,
                {
                    scale: 0.75,
                    borderRadius: "32px",
                },
                {
                    scale: 1,
                    borderRadius: "16px",
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 85%",
                        end: "top 25%",
                        scrub: 1,
                    },
                }
            );
        },
        { scope: containerRef }
    );

    if (!project) {
        return <h1 className="p-10">Project not found</h1>;
    }

    return (
        <main
            ref={containerRef}
            className="min-h-screen px-5 py-25 lg:px-20"
            id="work"
        >
            <Link
                to="/"
                className="inline-block mb-2 text-lg border px-5 py-2 rounded-full hover:text-orange-500 transition-colors"
            >
                Back to Work
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
                <div className="mt-15">

                    <p className="text-2xl text-orange-500 mb-5">
                        {project.category}
                    </p>

                    <div className="flex">
                        <SplitText type="chars">
                            <h1 className="text-5xl md:text-[4vw] font-bold mb-6">
                                {project.name}
                            </h1>
                        </SplitText>
                    </div>


                    {/* project desc */}
                    <section className="mt-15 lg:mt-28 max-w-3xl">
                        <p className="text-orange-500 text-sm mb-4">
                            <div className="content">
                                <SplitText type='chars' delay={1.2}>
                                    <h2 className="text-3xl md:text-5xl font-bold">
                                        About the project
                                    </h2>
                                </SplitText>
                            </div>
                        </p>


                        <SplitText delay={1.2}>

                            <p className="text-lg md:text-2xl leading-relaxed my-5 max-w-[75%] font-medium">
                                {project.overview.description}
                            </p>
                        </SplitText>
                    </section>

                    {/* technologies */}
                    <div className="mt-10">
                        <p className="text-2xl text-orange-500 mb-3">
                            Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border px-3 py-2 text-sm bg-[#faf8f6]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* live link */}
                    <div className="flex gap-3 mb-10 mt-5">
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border px-6 py-3 hover:bg-orange-400 transition-colors flex items-center justify-center gap-3"
                            >
                                <span> Visit Live Site </span> <span class="relative flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                                </span>
                                

                            </a>
                        )}

                    </div>
                </div>

                <div className="w-full overflow-hidden rounded-2xl">
                    <img
                        ref={imageRef}
                        src={project.image}
                        alt={project.name}
                        className="w-[70%] aspect-square object-cover will-change-transform mx-auto"
                    />
                </div>
            </div>


        </main>
    );
};

export default ProjectInfo;