import accommodationDatas from "../datas/accommodationDatas.json"
import Card from "./Card"



export default function Gallery() {

    return (

        <div className="flex flex-wrap justify-center max-w-[95%] h-auto my-0 mx-auto p-0 md:p-[50px] gap-5 md:gap-[60px] lg:gap-[30px] rounded-[25px] bg-white md:bg-white-smoke">

            {accommodationDatas.map(data => {

                return (
                    <Card 
                        key={data.id}
                        id={data.id}
                        cover={data.cover}
                        title={data.title}
                    />
                )
            })}

        </div>
    
    )
}
