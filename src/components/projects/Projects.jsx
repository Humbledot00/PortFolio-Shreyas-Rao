import Modal from "./Modal";

function Projects(){
    return(
        <div>
            <div className="mx-auto max-w-2xl lg:mx-0 mt-20 ">
                <h2 data-aos="zoom-in-up" className="text-3xl ml-10 font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
                <p data-aos="zoom-in-up" className="mt-2 ml-10 text-lg leading-8 text-gray-600">
                Here Are Some Of My Projects
                </p>
                <div className='ml-20  border-b w-1/2 border-gray-200'></div>
                
            </div>
            <div className="flex flex-wrap gap-x-11 justify-center">

                    <Modal
                    imageSrc="https://miro.medium.com/v2/resize:fit:720/format:webp/1*mkANqHaOakhW3ZXySouAYQ.jpeg"
                    title="Motion based interface for unity"
                    description="Unity-powered virtual 3D object manipulation system."
                    technology1="ESP8266"
                    technology2="MPU6050"
                    link="https://medium.com/@workforshreyas/crossing-boundaries-my-virtual-reality-adventure-a-journal-of-my-internship-e18f2d639223"
                    />

                    <Modal
                    imageSrc="https://65390a05e54a6c0ace574555--benevolent-strudel-82fb0f.netlify.app/neurites.jpg"
                    title="Neurites"
                    description="ClubHub: Gateway to Membership and Events   "
                    technology1="NodeJS"
                    technology2="MongoDB"
                    link="https://server-zl05.onrender.com/"
                    />


                    <Modal
                    imageSrc="https://t.ly/KP1XR"
                    title="Sankalp- AI powered Chatbot"
                    description="Innovative chatbot features a pretrained Python model for intelligent response prediction."
                    technology1="Python"
                    technology2="NodeJS"
                    link="https://test11-byll.onrender.com"
                    />
                
                    <Modal
                    imageSrc="https://65390a05e54a6c0ace574555--benevolent-strudel-82fb0f.netlify.app/medot.png"
                    title="MedDot"
                    description="A platform that provides health insights with integration of APIs."
                    technology1="React"
                    technology2="NodeJS"
                    link="https://meddot-nf7h5yreo-humbledot00.vercel.app"
                    />

                    <Modal
                    imageSrc="https://t.ly/ylziX"
                    title="Shop Management System"
                    description="Shop Management System, which deals with almost all the information related to the shop."
                    technology1="Python"
                    technology2="SQL"
                    link="https://github.com/Humbledot00/Shop-Management-System.git"
                    />


            </div>
        </div>
    );
}

export default Projects
