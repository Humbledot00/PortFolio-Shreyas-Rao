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
                    imageSrc="src\components\projects\medot.png"
                    title="MedDot"
                    description="A platform that provides health insights with integration of APIs."
                    technology1="React"
                    technology2="NodeJS"
                    link="https://meddot-nf7h5yreo-humbledot00.vercel.app"
                    />

                    <Modal
                    imageSrc="src\components\projects\classicclub.png"
                    title="Classic Club"
                    description="Web application which aimed to create an interactive platform for the club."
                    technology1="NodeJS"
                    technology2="MongoDB"
                    link="https://projectclubhouse.netlify.app"
                    />

                    <Modal
                    imageSrc="src\components\projects\neurites.jpg"
                    title="Neurites"
                    description="(working...).   "
                    technology1="NodeJS"
                    technology2="MongoDB"
                    link=""
                    />

            </div>
        </div>
    );
}

export default Projects