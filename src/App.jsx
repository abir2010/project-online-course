import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Cslider from "./Components/Cslider/Cslider";
import CourseProvider from "./Contexts/CourseProvider";
import Feature from "./Components/Feature/Feature";
import Pricing from "./Components/Pricing/Pricing";
import Statistic from "./Components/Statistic/Statistic";
import Testimonial from "./Components/Testimonial/Testimonial";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter } from "react-router-dom";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import BackToTop from "./Components/BackToTop/BackToTop";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <CourseProvider>
      <BrowserRouter>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#fff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000",
              },
              links: {
                color: "#000",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
            detectRetina: true,
          }}
        />
        <Navbar />
        <Banner />
        <Cslider />
        <Feature />
        <Pricing />
        <Statistic />
        <Testimonial />
        <About />
        <Contact />
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;
