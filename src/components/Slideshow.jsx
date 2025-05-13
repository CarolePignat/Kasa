import arrowForward from "../assets/arrowForward.png"
import arrowBack from "../assets/arrowBack.png"
import { useState } from "react"


export default function Slideshow({ slides }) {

    // State Hook defines the 1st slide index to 0
    const [currentIndex, setCurrentIndex] = useState(0);

    // Length of the array (slides)
    const length = slides.length;


    // "currentIndex === length - 1": on the last slide
    // "0": to the 1st slide
    // "currentIndex + 1 ": go to the next slide
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };


    // "currentIndex === 0": on the 1st slide
    // "length - 1": back to the last slide
    // "currentIndex - 1": back to the previous slide
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };


    return (

        <div className="relative flex w-full h-[255px] sm:h-[415px] my-0 mx-auto">

            <img 
                className="w-full h-full rounded-[25px] object-cover"
                src={slides[currentIndex]} 
                alt="Apartments pics" 
            />

            {/* If accommodation has more than 1 picture, arrows and slides counter are added */}
            {length > 1 && (

                <>

                    <img 
                        className="absolute w-3 sm:w-[47px] h-5 sm:h-[79px] right-[23px] top-[50%] text-white translate-x-0 -translate-1/2 z-10 cursor-pointer"
                        src={arrowForward} 
                        alt="Go to next slide" 
                        onClick={nextSlide}
                    />

<img 
                        className="absolute w-3 sm:w-[47px] h-5 sm:h-[79px] left-[23px] top-[50%] text-white translate-x-0 -translate-1/2 z-10 cursor-pointer"
                        src={arrowBack} 
                        alt="Back to previous slide" 
                        onClick={prevSlide}
                    />

                    <div className="absolute font-text font-medium text-[18px] text-white left-[50%] bottom-[25px] hidden sm:visible">
                        {currentIndex + 1} / {length}
                    </div>

                </>

            )}

        </div>

    )

}
