import { projects } from '../Constants/work'
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import SplitTextComponent from '../Components/UI/SplitText';
gsap.registerPlugin(SplitText);

const Work = () => {

    return (
        <div className='lg:px-2 min-h-screen' id="work">
            <SplitTextComponent type='chars' >
                <h1 className='text-5xl md:text-[4vw] font-bold mb-18'>Work</h1>
            </SplitTextComponent>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {projects.map((project) => (
                    <div key={project.name} className='p-3'>
                        <div className="aspect-square mx-auto overflow-hidden rounded-2xl project-image ">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                            />
                        </div>
                        <div className="p-4 px-0">
                            <SplitTextComponent type='chars' delay={0.5}>
                                <h2 className='text-4xl mt-4 mb-2 font-semibold'>{project.name}</h2>
                            </SplitTextComponent>
                            <a href={project.link} target='_blank' className=' hover:text-white transition-colors duration-400 flex items-center gap-2'><span>View Project</span> <FaArrowRightLong /></a>
                        </div>
                    </div>
                ))}

            </section>

        </div>
    )
}

export default Work