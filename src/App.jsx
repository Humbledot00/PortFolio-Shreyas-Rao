import  { useState, useEffect} from "react";
import { BrowserRouter as Router  } from 'react-router-dom';
import { Element, scroller } from "react-scroll";
import NavBar from "./components/Navbar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx"
import Projects from "./components/projects/Projects.jsx";
import './App.css'
import Resume from "./components/Resume/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Certificate from "./components/Cerificates/Cerificate.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const scrollToComponent = (componentName) => {
    scroller.scrollTo(componentName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the duration as needed (in milliseconds)

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
     <Router>
     {loading ? (
        <div className="loader">
        </div>
      ) : (
        <div>
        <div className="bg-gradient-to-r from-sky-200 to-sky-300">
            <NavBar scrollToComponent={scrollToComponent}/>
            <Element name="Hero">
              <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Element>
        </div>
            <Element name="Skills">
                <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Element>

            <Element name="Projects">
                <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Element>

            <Element name="Resume">
                <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Element>

            <Certificate/> 

            <Element name="Contact">
                <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Element>

            <Footer/>
            </div>
      )}
      </Router>



    </>
  );
};

export default App;
