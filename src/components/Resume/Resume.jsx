function Resume(){
    return(
        <div>
            <div className="mx-auto max-w-2xl lg:mx-0 mt-20 ">
                <h2 className="text-3xl ml-10 font-bold tracking-tight text-gray-900 sm:text-4xl">Resume</h2>
                <p className="mt-2 ml-10 text-lg leading-8 text-gray-600">
                Here Are My Experiences And Qualifications.
                </p>
                <div className='ml-20  border-b w-1/2 border-gray-200'></div>
                
            </div>
            <div className="flex flex-wrap justify-center gap-x-40 mt-10 ">
                <div className="">
                    <button className="button" data-text="Awesome">
                                <span className="actual-text">&nbsp;INTERNSHIP&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;INTERNSHIP&nbsp;</span>
                    </button>
                    <div data-aos="zoom-in-up" className="bg-white w-80 h-96 rounded-lg shadow-blue-gray-500/40 shadow-2xl border-2  mt-5">  
                            <div className="flex p-2 gap-1">
                            <div className="">
                            <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                            <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                            <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2 className="ml-6 text-xl">Internship, Virtual Reality </h2>
                            <p className="ml-6 mt-1 text-slate-600 text-lg">Centre For System Design, NITK </p>
                            <p className="ml-6 mt-2 text-amber-500 text-sm">November - 2023</p>
                            <p className="ml-6 mr-3 mt-2 text-slate-500 text-sm">Internship through the IEEE Setuve programme at the Centre for System Design, NITK Surathkal. Working on virtual reality projects and solving hardware-software integration problems has been a rewarding and informative experience.</p>

                    </div>
                </div>
                </div>
                <div className="resume">
                    <button className="button" data-text="Awesome">
                                <span className="actual-text">&nbsp;EDUCATION&nbsp;</span>
                                <span aria-hidden="true" className="hover-text">&nbsp;EDUCATION&nbsp;</span>
                    </button>
                    <div data-aos="zoom-in-up" className="bg-white w-80 h-96 rounded-lg shadow-blue-gray-500/40 shadow-2xl border-2 mt-5 sm:mt20">  
                            <div className="flex p-2 gap-1">
                            <div className="">
                            <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                            <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                            <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2 className="ml-6 text-xl">B.E, Computer Science Engineering</h2>
                            <p className="ml-6 mt-1 text-slate-600 text-lg">Vivekananda College Of Engineering </p>
                            <p className="ml-6 mt-2 text-amber-500 text-sm">Year 2021 - Year 2025</p>
                            <p className="ml-6 mr-4 mt-2 text-slate-500 text-sm">As an undergraduate student, I have a good understanding of web development technologies such as HTML, CSS, Tailwind CSS, JavaScript, and React JS. Additionally, Im proficient in backend technologies such as Node.js, Express.js, and MongoDB. </p>

                    </div>
                </div>
                </div>
            </div>
         </div>
    )
    }

export default Resume
