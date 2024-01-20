import  { useEffect, useState } from 'react';
import { Link} from "react-scroll";


import './style.css'
import { FaHamburger } from 'react-icons/fa';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closedropdown = () => {
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    // Add your other event listeners and logic here

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="nav-menu"
      aria-label="navigation bar"
      className={isSticky ? 'sticky' : ''}
    >
      <div className="container">
        <div className="nav-start">
          <a className="logo" href="/">
            <img src="https://65390a05e54a6c0ace574555--benevolent-strudel-82fb0f.netlify.app/logo.png" width="100" height="100" alt="Inc Logo" />
          </a>
          <nav className={`menu ${isDropdownOpen ? 'show bg-white' : ''}`}>
            <ul className="menu-bar">
              <li className="nav-link"><Link
                  to="Hero"
                  spy={true}
                  smooth={true}
                  duration={800}
                  onClick={closedropdown}
                >
                Discover</Link>
              </li>
              <li>
                <a className="nav-link" ><Link
                  to="Skills"
                  spy={true}
                  smooth={true}
                  duration={800}
                  onClick={closedropdown}
                >
                  Skills</Link>
                </a>
              </li>
              <li>
                <a className="nav-link" ><Link
                  to="Projects"
                  spy={true}
                  smooth={true}
                  duration={800}
                  onClick={closedropdown}
                >
                  Projects</Link>
                </a>
              </li>
              <li>
                <a className="nav-link" href="" ><Link
                  to="Resume"
                  spy={true}
                  smooth={true}
                  duration={800}
                  onClick={closedropdown}
                >
                  Resume</Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-end">
          <div className="right-container">
          <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                ><button className="btn btn-primary">Contact</button></Link>
          </div>
          <button
            id="hamburger"
            className={isSticky ? 'sticky' : ''}
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen ? 'true' : 'false'}
            onClick={toggleDropdown}
          ><FaHamburger/>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
