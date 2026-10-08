import Navbar from './Components/UI/Navbar'
import Home from './Pages/Home'
import Work from './Pages/Work'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cursor from "./Components/UI/Cursor";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import About from './Pages/About';
import WorkEx from './Pages/WorkEx';
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from 'react';
import Contact from './Pages/Contact';
import { BorderBeam } from "@/Components/ui/border-beam";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, Flip);

const App = () => {
  const imgRef = useRef(null)
  const workImageTargetRef = useRef(null);
  const meImg = useRef(null);
  useGSAP(() => {

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();

  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Flip.fit(imgRef.current, workImageTargetRef.current, {
      //   duration: 0.5,
      //   ease: "power1.inOut",
      //   scrollTrigger: {
      //     trigger: workImageTargetRef.current,
      //     start: "top 80%",
      //     end: "top 30%",
      //     scrub: 1,
      //     // markers: true,
      //   },
      // });
    });

    return () => ctx.revert();
  }, []);
  return (

        <BrowserRouter>
          <Cursor />

          {/* Navbar lives OUTSIDE smooth-wrapper */}
          <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-fit">
            <div className="relative rounded-full p-0.5">
              <Navbar />
              <BorderBeam
                size={100}
                duration={5}
                colorFrom="#f97316"
                colorTo="#f97316"
                borderWidth={2}
              />
            </div>
          </div>

          <div id="smooth-wrapper">
            <div id="smooth-content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="px-5 lg:px-20">
                      <Home />
                      <Work />
                      <About meImg={meImg} />
                      <WorkEx workImageTargetRef={workImageTargetRef} />
                      <Contact />
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
  )
}

export default App