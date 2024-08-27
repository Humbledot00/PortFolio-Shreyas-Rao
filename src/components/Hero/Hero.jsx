'use client'
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  return (
    <div id="home" className="containercontent md:ml-28">
      <div className="box my-7 md:mt-32 sd:mt-16">
        <div>
          <h2 className="NameBanner ml-5 text-5xl font-bold tracking-tight">
            Hello, I&apos;m Shreyas M Rao
          </h2>
          <h2 className="NameBanner text-4xl text-amber-400 mt-4 ml-5">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Photographer', 'Computer Science Student'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="mt-4 text-base text-zinc-600 ml-5 sd:text-center">
            I&apos;m an undergraduate student at VCET Puttur
          </p>
        </div>

        <div className="flex flex-wrap justify-start">
          <div className="buttonrow flex my-6 lg:ml-5 ml-5">
            <a href="https://www.linkedin.com/in/shreyasraosayshello/">
              <button><span>Say HI</span></button>
            </a>
            <button onClick={openModal}>
              <span>Resume</span>
            </button>
          </div>

          {/* Simple Custom Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative">
                <button
                  onClick={closeModal}
                  className="absolute top-5 right-6 text-black"
                >
                  Close
                </button>
                <h2 className="text-xl font-bold mb-4">Resume</h2>
                <div className="relative w-full h-[60vh] overflow-auto">
                  <img
                    src="Resume.jpg"
                    className="absolute top-0 left-0"
                    alt="Resume"
                  />
                </div>
              </div>
            </div>
          )}



          <div>
            <ul className="flex gap-5 ml-5 lg:ml-5">
              <li>
                <a href="https://github.com/Humbledot00">
                  <FaGithub className="text-3xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shreyasraosayshello/">
                  <FaLinkedin className="text-3xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/shreyss_rao?igshid=MzRlODBiNWFlZA==">
                  <FaInstagram className="text-3xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://t.me/Shreyss_rao">
                  <FaTelegram className="text-3xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Shreyss_Rao?t=fW5tZjTQj393tHZisKmbSQ&s=09">
                  <FaTwitter className="text-3xl hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bannerimage box">
        <img
          src="/images/pic.png"
          alt="mine"
        />
      </div>
    </div>
  );
};

export default Hero;
