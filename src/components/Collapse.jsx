import { useState } from "react"
import arrow_collapse from "../assets/arrow_collapse.png"



export default function Collapse({ title, content }) {

    const [isExpanded, setIsExpanded] = useState(false);


    return (

        <div className="relative flex flex-col w-[80%] my-0 mx-auto cursor-pointer">

            {/* By default, content is hidden and arrow down */}
            {/* On click, content is shown and arrow up */}
            {/* 'onClick' allows to manage the events */}
            <h3 
                className="flex justify-between items-center h-[30px] sm:h-[47px] font-text font-medium text-[13px] sm:text-2xl py-0 px-3 sm:px-[18px] m-0 bg-light-red text-white rounded-[10px]"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {title}

                <img 
                    className={isExpanded ? 'arrow_up' : 'arrow_down'}
                    src={arrow_collapse} 
                    alt="Show content" 
                />
            </h3>

            <div className={isExpanded ? 'collapse_content' : 'collapse_content_hidden'}>
                {content}
            </div>

        </div>
    )
}
