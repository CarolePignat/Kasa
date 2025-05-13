import { NavLink } from "react-router";



export default function Card({ id, cover, title }) {

    return (

        <div className="relative w-full md:w-[45%] lg:w-[30%] h-[255px] md:h-[340px] bg-light-red bg-linear-[180deg, oklch(100% 0 0 / 0%) 0%, oklch(0% 0 0 / 50%), 100%] top-0 left-0 rounded-[10px] overflow-hidden cursor-pointer">

            <NavLink to={`/accommodation/${id}`}>

                <img 
                    src={cover} 
                    alt={title} 
                    className="w-full h-full object-cover object-center"
                />

                <p className="absolute flex font-text font-medium text-sm sm:text-[18px] text-white w-[50%] left-5 bottom-5 right-5 m-0">
                    {title}
                </p>

            </NavLink>

        </div>

    )
}
