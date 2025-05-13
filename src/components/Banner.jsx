


export default function Banner({ picture, text }) {

    return (

        <div className="relative w-[95%] h-[223px] rounded-[10px] sm:rounded-[25px] my-0 mx-auto overflow-hidden">

            <div className="absolute w-full h-full bg-images rounded-[10px] sm:rounded-[25px] top-0 left-0"></div>

            <img 
                src={picture} 
                alt="Banner pic" 
                className="w-full h-full rounded-[10px] sm:rounded-[25px] object-cover object-center"
            />

            <p className="absolute items-start sm:items-center font-text text-2xl sm:text-3xl md:text-5xl text-white top-0 left-0 bottom-0 right-0 mt-[25px] sm:my-[85px] md:mt-[78px] pl-4 w-60 sm:w-full">
                {text}
            </p>

        </div>

    )
}
