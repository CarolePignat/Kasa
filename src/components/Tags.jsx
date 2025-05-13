


export default function Tags({ tags }) {

    return (

        <div className="inline-flex justify-center items-center min-w-[84px] sm:min-w-[115px] h-[18px] sm:h-[25px] rounded-[10px] bg-light-red mr-2.5 py-[5px] px-[15px]">

            <p className="font-text font-medium text-[10px] sm:text-[14px] text-white">
                {tags}
            </p>

        </div>

    )

}
