import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div id="home" className="containercontent md:ml-28">
      <div className="box my-7 md:mt-32 sd:mt-16">
        <div className="">
          <h2 className="NameBanner ml-5 text-5xl font-bold tracking-tight">
            Hello, I&apos;m Shreyas M Rao
          </h2>
          <h2 className="NameBanner text-4xl text-amber-400 mt-4 ml-5">
                    <Typewriter
                    options={{
                        strings: ['Web Developer','Photographer', 'Computer Science Student'],
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
          <div className="buttonrow flex my-6 lg:ml-5 ml-5 ">
            <a href="https://www.linkedin.com/in/shreyasraosayshello/">
              <button><span>Say HI</span></button>
            </a>
            <a href="/Resume.pdf" download>
              <button><span> Resume</span></button>
            </a>
          </div>
          <div>
            <ul className="flex gap-5 ml-5  lg:ml-5">
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
      <div className="bannerimage box ">
        <img src="https://65390a05e54a6c0ace574555--benevolent-strudel-82fb0f.netlify.app/hero.png" alt="mine" />
      </div>
    </div>
  );
};

export default Hero;
