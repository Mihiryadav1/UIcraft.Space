import React from 'react'
import SplitTextComponent from '../Components/UI/SplitText'
import { FiArrowUpRight } from "react-icons/fi";
const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        formData.append(
            "access_key",
            accessKey
        );

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.success) {
            alert("Message sent successfully!");
            event.target.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    };
    return (

        <div className='lg:px-2 min-h-screen relative' id="contact">
            < SplitTextComponent type='chars' delay={1} >
                <h1 className='text-5xl md:text-[4vw] font-bold mb-10'>Let's Connect !</h1>
            </ SplitTextComponent>
            <SplitTextComponent type='words' delay={1.2}>

                <p className='text-2xl md:text-2xl lg:text-2xl xl:text-4xl font-medium  leading-10 md:leading-15 lg:leading-16 relative z-3'>  I’m always open to discussing new opportunities, <br />
                    interesting projects, or just having a chat about <br />
                    <span className="text-orange-500">
                        design, tech and interactive experiences.
                    </span>
                </p>
            </SplitTextComponent>

            <img
                src="/curvedOrange.svg"
                alt=""
                className="absolute left-0 top-20 w-[55%] h-[80vh] pointer-events-none z-0  opacity-30"
            />

            <form
                onSubmit={handleSubmit}
                className="contact relative z-20 mt-24 "
            >

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

                    {/* Name */}
                    <div className="border-b border-black/30 pb-3">
                        <label className="block text-sm uppercase tracking-widest mb-3">
                            Your Name
                        </label>

                        <input
                            type="text"
                            placeholder="Mihir Yadav"
                            className="w-full bg-transparent outline-none text-2xl placeholder:text-black/40"
                        />
                    </div>


                    {/* Email */}
                    <div className="border-b border-black/30 pb-3">
                        <label className="block text-sm uppercase tracking-widest mb-3">
                            Your Email
                        </label>

                        <input
                            type="email"
                            placeholder="mihir@email.com"
                            className="w-full bg-transparent outline-none text-2xl placeholder:text-black/40"
                        />
                    </div>


                    {/* Message */}
                    <div className="md:col-span-2 border-b border-black/30 pb-3">
                        <label className="block text-sm uppercase tracking-widest mb-3">
                            Your Message
                        </label>

                        <textarea
                            rows="2"
                            placeholder="I'd love to talk about..."
                            className="w-full bg-transparent outline-none text-2xl resize-none placeholder:text-black/40"
                        />
                    </div>

                </div>


                {/* Button */}
                <button
                    className="mt-10 border rounded-full px-6 py-3 text-lg
                hover:bg-orange-400 transition-colors duration-300"
                >
                    Send Message
                    {/* <FiArrowUpRight className="text-xl" /> */}
                </button>

                {/* Bottom information */}
                <div className="border-t border-black/20 mt-24 pt-8
                    grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Email */}
                    <div>
                        <p className="text-xs uppercase tracking-widest text-black/50 mb-3">
                            Or reach out directly
                        </p>

                        <a
                            href="mailto:yadavmihir30@gmail.com"
                            className="flex items-center gap-1 text-orange-400 transition-colors text-2xl font-bold capitalize"
                        >
                            email
                            {/* <FiArrowUpRight /> */}
                        </a>
                    </div>


                    {/* Socials */}
                    <div className="flex gap-6 text-lg">

                        <a
                            href="https://www.linkedin.com/in/mihir-yadav1/" target='_blank'
                            className="flex items-center gap-1 text-orange-400 transition-colors text-2xl font-bold capitalize"
                        >
                            LinkedIn
                            {/* <FiArrowUpRight /> */}
                        </a>

                        <a
                            href="https://github.com/Mihiryadav1" target='_blank'
                            className="flex items-center gap-1 text-orange-400 transition-colors text-2xl font-bold capitalize"
                        >
                            GitHub
                            {/* <FiArrowUpRight /> */}
                        </a>



                    </div>

                </div>
            </form>


        </div>
    )
}

export default Contact