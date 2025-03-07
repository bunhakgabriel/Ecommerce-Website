import { IoIosPhonePortrait } from "react-icons/io";
import { IProduto } from "./interfaces/IProduto";
import { BsSmartwatch } from "react-icons/bs";
import { IoGameControllerOutline, IoHeadsetOutline } from "react-icons/io5";
import { CiCamera, CiMonitor } from "react-icons/ci";
import { PiGameControllerThin } from "react-icons/pi";

export const produtos: IProduto[] = [
    {
        id: "1",
        nome: 'HAVIT HV-G92 Gamepad',
        img: {
            src: '/imagens/produtos/controle-pc.png',
            alt: 'Controle para computador'
        },
        preco: 160,
        desconto: 40
    },
    {
        id: "2",
        nome: 'AK-900 Wired Keyboard',
        img: {
            src: '/imagens/produtos/teclado-pc.png',
            alt: 'Teclado para computador'
        },
        preco: 1160,
        desconto: 200
    },
    {
        id: "3",
        nome: 'IPS LCD Gaming Monitor',
        img: {
            src: '/imagens/produtos/monitor-pc.png',
            alt: 'Monitor para computador'
        },
        preco: 400,
        desconto: 30
    },
    {
        id: "4",
        nome: 'S-Series Comfort Chair',
        img: {
            src: '/imagens/produtos/cadeira.png',
            alt: 'Cadeira para sala'
        },
        preco: 400,
        desconto: 25
    },
    {
        id: "5",
        nome: 'The north coat',
        img: {
            src: '/imagens/produtos/jaqueta-feminina.png',
            alt: 'Jaqueta feminina'
        },
        preco: 360,
        desconto: 0
    }
] 

export const categorias = [
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