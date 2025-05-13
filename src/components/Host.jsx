


export default function Host({ host }) {

    // 'split' method to separate first name from last name
    const fullname = host.name.split(' ');

    // const firstName = [0]
    // const lastName = [1]
    const [firstName, lastName] = fullname;


    return (

        <div className="flex justify-end items-center mt-4 sm:mt-10">

            <div className="text-right font-text font-medium text-xs sm:text-[18px] text-light-red mr-2.5 sm:mr-[15px]">

                <p className="m-0">{firstName}</p>
                <p className="m-0">{lastName}</p>

            </div>

            <img 
                className="w-8 sm:w-16 h-8 sm:h-16 rounded-full"
                src={host.picture} 
                alt="Owner's pic" 
            />

        </div>
    )
}
