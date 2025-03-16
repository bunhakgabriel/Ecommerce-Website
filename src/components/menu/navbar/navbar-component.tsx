import { BiUser } from "react-icons/bi";
import { LuMenu } from "react-icons/lu";
import { PiShoppingCartThin } from "react-icons/pi";

interface NavBarProps {
    setMobileMenu: (value: boolean) => void
}

function Navbar({ setMobileMenu }: NavBarProps) {
    return (
        <header className="w-full min-h-16 shadow-[0_2px_3px_rgba(0,0,0,0.2)] flex justify-between items-center fixed z-10 bg-white py-2 px-3 sm:p-4 md:px-10 xl:px-30" >
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
                <div className="rounded-2xl p-1 bg-[#DB4444]">
                    <BiUser className="text-[white] md:text-xl cursor-pointer" />
                </div>
                <div className="sm:hidden">
                    <LuMenu className="cursor-pointer text-3xl" onClick={() => setMobileMenu(true)}/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;