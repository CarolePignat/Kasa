import red_star from "../assets/red_star.png"
import grey_star from "../assets/grey_star.png"


export default function Rating({ rating }) {

    return (

        <div>

            {/* Array including all 5 stars */}
            {[...Array(5)].map((star, index) => {

                // Value '1' = first star & Value '5' = latter one
                // 'index + 1' : starting value = 1 instead of 0
                const ratingValue = index + 1;

                return (

                    // '<=' = value smaller or equal to rating -> red star otherwise grey
                    <img 
                        className="w-[13px] sm:w-6 h-[13px] sm:h-6 mr-[5px] sm:mr-2.5 lg:mt-6"
                        src={ratingValue <= rating ? red_star : grey_star} 
                        alt="Rating Stars" 
                    />

                )

            })}

        </div>

    )

}
