import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiInstagramLogoLight } from "react-icons/pi";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";

function Rodape() {
    return (
        <footer>
            <div className="lg:gap-0 xl:px-24 bg-black text-white flex flex-wrap gap-15 lg:px-15 pl-5 py-10 overflow-x-hidden lg:justify-between">
                <div className="w-[200px] lg:w-[18%]">
                    <ul className="flex flex-col gap-3">
                        <li className="cursor-pointer font-medium text-xl">Exclusive</li>
                        <li className="cursor-pointer font-medium text-[17px] sm:text-xl">Subscribe</li>
                        <li className="cursor-pointer text-sm">Get 10% off your first order</li>
                        <li><input className="border-2 border-white rounded-sm p-1 w-5/6" placeholder="Enter your email" /></li>
                    </ul>
                </div>
                <div className="w-[200px] lg:w-[18%]">
                    <ul className="flex flex-col gap-3">
                        <li className="cursor-pointer font-medium text-xl">Support</li>
                        <li className="cursor-pointer text-sm">111 Bijoy sara ni, Dhaka, DH 1515, Bangladesh.</li>
                        <li className="cursor-pointer text-sm">exclusive@gmail.com</li>
                        <li className="cursor-pointer text-sm">+88015-88888-9999</li>
                    </ul>
                </div>
                <div className="w-[200px] lg:w-[12%]">
                    <ul className="flex flex-col gap-3">
                        <li className="cursor-pointer font-medium text-xl">Account</li>
                        <li className="cursor-pointer text-sm">My Acco unt</li>
                        <li className="cursor-pointer text-sm">Login / Register</li>
                        <li className="cursor-pointer text-sm">Cart</li>
                        <li className="cursor-pointer text-sm">Wishlist</li>
                        <li className="cursor-pointer text-sm">Shop</li>
                    </ul>
                </div>
                <div className="w-[200px] lg:w-[12%]">
                    <ul className="flex flex-col gap-3">
                        <li className="cursor-pointer font-medium text-xl">Quick Link</li>
                        <li className="cursor-pointer text-sm">Privacy Pol icy</li>
                        <li className="cursor-pointer text-sm">Terms Of Use</li>
                        <li className="cursor-pointer text-sm">FAQ</li>
                        <li className="cursor-pointer text-sm">Contact</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 w-[220px] lg:w-[23%]">
                    <h2 className="font-medium text-xl">Download App</h2>
                    <p className="text-sm">Save $3 with Ap p New User Only</p>
                    <div className="flex gap-2">
                        <div className="w-[86px] h-[86px]">
                            <img src='/imagens/diversas/qr-code.png' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="border border-white rounded-md flex gap-2 items-center justify-center p-1">
                                <IoLogoGooglePlaystore size={20} />
                                <div className="flex flex-col items-start">
                                    <span className="text-[9px]">GET IT ON</span>
                                    <span className="font-medium text-xs">Google Play</span>
                                </div>
                            </button>
                            <button className="border border-white rounded-md flex gap-2 items-center justify-center p-1">
                                <FaApple size={20} />
                                <div className="flex flex-col items-start">
                                    <span className="text-[9px]">Download on the</span>
                                    <span className="font-medium text-xs">App Store</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-8 py-2">
                        <RiFacebookLine size={20} />
                        <FaXTwitter size={20} />
                        <PiInstagramLogoLight size={20} />
                        <RiLinkedinLine size={20} />
                    </div>
                </div>
            </div>
            <div className="bg-black text-center w-full text-gray-200 border-t border-t-gratext-gray-200 p-4 text-sm sm:text-[16px]">&copy; Copyright Rimel 2022. All right reserved</div>
        </footer>
    )
}

export default Rodape;