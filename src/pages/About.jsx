import Banner from "../components/Banner";
import banner_aboutpage from "../assets/banner_aboutpage.png";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import collapseDatas from "../datas/collapseDatas.json"; 
import Collapse from "../components/Collapse";



export default function About() {
  
    return (

        <div>

            <Header />

            <div className="mt-[17px] sm:mt-11">
                <Banner picture={banner_aboutpage} />
            </div>

            <div className="mt-[19px] sm:mt-[31px]">

                {collapseDatas.map(data => {

                    return (

                        <div key={data.id}>
                            <Collapse
                                title={data.title}
                                content={data.content}
                            />
                        </div>
                    )
                })}
            </div>

            <Footer />

        </div>
    )

}
