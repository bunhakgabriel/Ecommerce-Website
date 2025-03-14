import { MdOutlineClose } from "react-icons/md";
import { linksNavBarLateral } from "../navbar-lateral/dados";
import { useEffect } from "react";

interface NavBarMobileProps {
    setMobileMenu: (value: boolean) => void
    mobileMenu: boolean
}

function NavbarMobile({ mobileMenu, setMobileMenu }: NavBarMobileProps) {

    function handleMenu(){
        setMobileMenu(false);
        document.body.style.overflow = "";
    }

    useEffect(() => {
        if(mobileMenu){
            document.body.style.overflow = "hidden";
        }
    }, [mobileMenu]);

    return (
        <>
            <div onClick={handleMenu} className={`${mobileMenu ? 'opacity-50' : 'hidden'} bg-black fixed w-screen h-screen z-20`}>
            </div>
            <div className={`${mobileMenu ? 'translate-x-0' : 'transform -translate-x-full'} fixed z-30 w-full shadow-lg transition-transform duration-250 ease-in-out flex h-screen`}>
                <div className="bg-white w-3/4">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <button>
                                <MdOutlineClose className="h-6 w-6 cursor-pointer" onClick={handleMenu} />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto max-h-screen pb-20">
                        {/* Top Navigation Items */}
                        <div className="p-4 border-b border-gray-200">
                            <nav className="space-y-4">
                                <a href="#" className="block hover:text-red-500">Home</a>
                                <a href="#" className="block hover:text-red-500">Contact</a>
                                <a href="#" className="block hover:text-red-500">About</a>
                                <a href="#" className="block hover:text-red-500">Sign Up</a>
                            </nav>
                        </div>

                        {/* Side Navigation Categories */}
                        <div className="p-4">
                            <h3 className="font-semibold mb-4">Categories</h3>
                            <nav className="space-y-4">
                                {linksNavBarLateral.map(({ title, rota }, index) => (
                                    <a href={rota} key={index} className="block hover:text-red-500">{title}</a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarMobile;