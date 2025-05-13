import logo_footer from "../assets/logo_footer.png"


export default function Footer() {

    return (

        <footer className="flex flex-col justify-center items-center w-full h-[209px] bg-footer mt-[50px] sm:mt-[150px]">

            <img 
                src={logo_footer} 
                alt="White Footer Logo Kasa"
                className="w-[122px] h-[39px] mt-[66px]"
            />

            <p className="flex justify-center font-text font-medium text-xs sm:text-2xl text-white mt-[46px] mb-[62px] sm:my-[29px] w-full">
                © 2020 Kasa. All rights reserved
            </p>

        </footer>

    )
}
