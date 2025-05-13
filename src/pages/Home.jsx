import Banner from "../components/Banner";
import banner_homepage from "../assets/banner_homepage.png";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Gallery from "../components/Gallery";



export default function Home() {

    return (

        <div>

            <Header />

            <div className="mt-4 sm:mt-[63px]">
                <Banner 
                    picture={banner_homepage} 
                    text="Chez vous, partout et ailleurs" 
                    // className="home_banner"
                />
            </div>

            <div className="mt-[30px] md:mt-[43px]">
                <Gallery />
            </div>

            <Footer />

        </div>
    )
    
}
