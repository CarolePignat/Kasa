import { NavLink } from "react-router";
import Footer from "../layout/Footer";
import Header from "../layout/Header";



export default function Error() {
  
    return (

        <>

            <Header />

                <div className="font-text text-light-red">

                    <h1 className="flex justify-center items-center text-8xl sm:text-[192px] lg:text-[288px] font-bold mt-[195px] sm:mt-[169px]">
                        404
                    </h1>

                    <h3 className="flex justify-center items-center text-[18px] sm:text-[25px] lg:text-4xl lg:text-center font-extrabold mt-[3%] mb-0 mx-[12%] sm:mt-[66px]">
                        Oups! La page que vous demandez n'existe pas
                    </h3>

                    <NavLink 
                        to="/"
                        className="flex justify-center items-center text-[14px] text-light-red mt-[133px] sm:mt-[182px] mb-0"
                    >
                        Retourner sur la page d'accueil
                    </NavLink>

                </div>

            <Footer />
        
        </>
    )
  
}
