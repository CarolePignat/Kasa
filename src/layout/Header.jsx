import { NavLink } from "react-router"
import logo from "../assets/logo.png"


export default function Header() {

    return (

        <header className="flex justify-between max-w-[95%] h-[47px] sm:h-[68px] my-0 mx-auto">

            <img 
                src={logo} 
                alt="Red Kasa Logo" 
                className="w-[145px] sm:w-[210px]"
            />

            <div className="flex justify-end items-center w-[309px]">

                <ul className="inline-flex h-[17px] sm:h-[34px] gap-[10px] sm:gap-[57px]">

                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className="font-text text-xs sm:text-2xl text-light-red">Accueil</li>
                    </NavLink>

                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li className="font-text text-xs sm:text-2xl text-light-red w-full">À propos</li>
                    </NavLink>
                </ul>

            </div>

        </header>

    )
}
