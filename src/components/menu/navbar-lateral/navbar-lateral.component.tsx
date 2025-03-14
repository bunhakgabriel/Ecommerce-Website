import { IoChevronForwardSharp } from "react-icons/io5"
import { linksNavBarLateral } from "./dados"

function NavBarLateral(){
    return (
        <div className="w-[200px] hidden sm:block">
            <ul className="flex flex-col gap-1">
                {linksNavBarLateral.map(({ title }, index) => (
                    <li key={index} className="flex justify-between items-center">
                        {title} <IoChevronForwardSharp />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavBarLateral