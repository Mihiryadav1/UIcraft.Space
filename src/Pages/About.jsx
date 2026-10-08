import SplitTextComponent from '../Components/UI/SplitText'
import Ball from "../Animations/Ball"
import { services } from '../Constants/services'
const About = ({ meImg }) => {

    return (
        <div className='lg:px-2 min-h-screen relative about' id='about'>
            <SplitTextComponent type='chars' delay={1}>
                <h1 className='text-5xl md:text-[4vw] font-bold mb-20'>About Me</h1>
            </SplitTextComponent>
            {/* About me */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:mb-30">
                <div className="content flex flex-col gap-14 md:gap-10">
                    <div className="content flex gap-12 md:gap-10 items-center">
                        <div className="w-12 shrink-0 text-center">
                            <span className="text-2xl font-bold">01</span>
                            <div className="w-12 h-1 bg-orange-500 mt-2" />
                        </div>
                        <div>
                            <SplitTextComponent type='chars' delay={1.2}>
                                <h3 className='text-4xl md:text-4xl lg:text-5xl font-bold'>Who am I?</h3>
                            </SplitTextComponent>
                        </div>
                    </div>


                    <h3 className='text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-medium  leading-12 md:leading-15 lg:leading-16 relative z-3'>
                        I started with
                        <span className='text-orange-400 mx-2 font-bold'>
                            engineering,</span> found my way into
                        <span className='text-orange-400 mx-2 font-bold'>
                            frontend development </span>
                        and somewhere along the way became fascinated by what happens between an
                        <span className='text-orange-400 mx-2 font-bold'>
                            interface </span>
                        and the person using it. That curiosity is what keeps me exploring  <span className='text-orange-400 mx-2 font-bold'>
                            design, motion, </span>and  <span className='text-orange-400 mx-2 font-bold'>
                            interaction </span>.</h3>

                </div>
                <div className="aboutImg flex items-center md:justify-center relative">
                    <img src="./This_is_me.webp" alt="Hello thereIntenet feels bad today, sorry!" className="project-image w-[80%] relative z-2 object-cover rounded-xl md:relative md:rotate-5 animate-[hanging_6s_ease-in-out_infinite] " />
                </div>
            </div>
            {/* what i like to work on */}
            <div className="flex flex-col md:min-h-[40vh] mt-24">
                <div className="content flex gap-12 md:gap-10">
                    <div className="w-12 shrink-0 text-center">
                        <span className="text-2xl font-bold">02</span>
                        <div className="w-12 h-1 bg-orange-500 mt-2" />
                    </div>
                    <SplitTextComponent type='chars' delay={1}>
                        <h3 className='text-4xl md:text-4xl lg:text-5xl font-bold'>What I like to work on</h3>
                    </SplitTextComponent>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-7 lg:gap-10 mt-15 mb-30">
                    {
                        services.map(service => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="border border-gray-200 rounded-2xl p-6 bg-[#faf8f6]"
                                >
                                    <div
                                        className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
                                    >
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mt-5">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-500 mt-2 leading-relaxed text-lg">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </div >
    )
}

export default About