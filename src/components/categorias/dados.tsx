import { IoIosPhonePortrait } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { IoHeadsetOutline } from "react-icons/io5";
import { CiCamera, CiMonitor } from "react-icons/ci";
import { PiGameControllerThin } from "react-icons/pi";
import { ReactElement } from "react";


export const categorias: {title: string, icon: ReactElement}[] = [
    {
        title: 'Phones',
        icon: <IoIosPhonePortrait className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
    {
        title: 'Computers',
        icon: <CiMonitor className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
    {
        title: 'SmastWatch',
        icon: <BsSmartwatch className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
    {
        title: 'Camera',
        icon: <CiCamera className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
    {
        title: 'HeadPhones',
        icon: <IoHeadsetOutline className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
    {
        title: 'Gaming',
        icon: <PiGameControllerThin className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
    {
        title: 'HeadPhones',
        icon: <IoHeadsetOutline className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
    {
        title: 'Gaming',
        icon: <PiGameControllerThin className="text-[40px] sm:text-[64px] md:text-[76px]" />
    },
]