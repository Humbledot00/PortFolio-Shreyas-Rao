import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';






const Modal = ({ imageSrc, title, description,technology1, technology2 ,link}) =>{
    

    return(
        <>
            <div className="relative mt-24 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-125 transform transition-transform duration-300 ease-in-out">
                 <img className="w-full " src={imageSrc} alt={title} />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                    </p>
                </div>
                    <div className="p-6 pt-0">
                    
                    <a
                  
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {technology1}
                  </a>
                  <a
                    
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {technology2}
                  </a>
                    
                  <a
                        className="float-right"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLink />
                        </a>
                </div>
                
                 </div>
        </>
    );
};

Modal.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technology1: PropTypes.string.isRequired,
    technology2: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired

  };

export default Modal