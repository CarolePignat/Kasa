import { useParams } from "react-router";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import accommodationDatas from "../datas/accommodationDatas.json";
import Error from "./Error";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";



export default function Accommodation() {

    // Hook 'useParams' to get the 'id' in the URL
    const accommodationId = useParams();

    // Getting accommodation linked to the 'id' in the URL
    const selectedAccommodation = accommodationDatas.find(selectedAccommodation => selectedAccommodation.id === accommodationId.id);

    // Redirecting to the Error page if the accommodation's 'id' is not correct
    if (!selectedAccommodation) {
        return <Error />
    }


    return (

        <>

            <Header />

                <div className="max-w-[95%] my-0 mx-auto">

                    <div className="mt-[30px]">
                        <Slideshow slides={selectedAccommodation.pictures} />
                    </div>

                    <div className="flex justify-between lg:flex-col">

                        <div className="flex flex-col font-text text-light-red mt-[30px]">

                            <h1 className="text-[18px] xl:text-[27px] font-medium leading-[26px] sm:leading-[51px] m-0">
                                {selectedAccommodation.title}
                            </h1>

                            <p className="text-[14px] sm:text-[18px] leading-5 sm:leading-[26px] m-0">
                                {selectedAccommodation.location}
                            </p>

                            <div className="mt-[10px] sm:mt-[30px]">
                                {selectedAccommodation.tags.map((tag, index) => (
                                    <Tags key={index} tags={tag} />
                                ))}
                            </div>

                        </div>

                        <div className="lg:flex flex-row-reverse justify-between content-baseline">

                                <Host 
                                    className="lg:justify-start"
                                    host={selectedAccommodation.host} 
                                />

                                <div className="my-[27px]">
                                    <Rating rating={selectedAccommodation.rating} />
                                </div>
                        </div>

                    </div>

                    <div className="flex lg:inline-flex flex-col w-full mt-0 sm:mt-6 gap-5 lg:gap-[76px] xl:gap-[30px]">

                        <Collapse 
                            className="w-full lg:w-[50%] list-none"
                            title="Description" 
                            content={selectedAccommodation.description} 
                        />

                        <Collapse
                            className="w-full lg:w-[50%] list-none"
                            title="Équipements"
                            content={selectedAccommodation.equipments.map((equipment, index) => (

                                <li key={index}>{equipment}</li>
                            ))}  
                        />       

                    </div>

                </div>

            <Footer />

        </>
    )

}
