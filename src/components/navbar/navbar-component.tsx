import { BiUser } from "react-icons/bi";
import { PiShoppingCartThin } from "react-icons/pi";

function Navbar() {
    return (
        <header className="flex justify-between items-center" >
            <div>
                <h1 className="font-medium text-xl md:text-2xl">Ecommerce</h1>
            </div>
            <div className="hidden sm:block md:text-[18px]">
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <PiShoppingCartThin className="cursor-pointer text-2xl md:text-3xl" />
                </div>
                <div className="rounded-2xl p-1 bg-[#FF0000]">
                    <BiUser className="text-[white] md:text-xl cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Navbar;