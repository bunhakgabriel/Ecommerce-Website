import { useState } from "react";
import NavbarMobile from "./navbar-mobile/navbar-mobile.component";
import Navbar from "./navbar/navbar-component";

function Menu(){
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
 
    return (
        <>
            <Navbar setMobileMenu={setMobileMenu} />
            <NavbarMobile mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </>
    )
}

export default Menu;