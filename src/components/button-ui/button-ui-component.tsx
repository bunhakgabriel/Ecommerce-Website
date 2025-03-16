import { ReactNode } from "react";

function ButtonUi({ children }: { children: ReactNode }){
    return (
        <button className="bg-[#DB4444] text-white text-xs p-[6px] sm:text-sm md:text-[18px] sm:px-5 sm:py-2 md:px-7 rounded-sm">
            {children}
        </button>
    )
}

export default ButtonUi;