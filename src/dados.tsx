import { IoIosPhonePortrait } from "react-icons/io";
import { IProduto } from "./interfaces/IProduto";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuHeadphones } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";

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
        icon: <IoIosPhonePortrait size={100} />
    },
    {
        title: 'Computers',
        icon: <HiOutlineComputerDesktop size={100} />
    },
    {
        title: 'SmastWatch',
        icon: <BsSmartwatch size={100} />
    },
    {
        title: 'Camera',
        icon: <MdOutlineCameraAlt size={100} />
    },
    {
        title: 'HeadPhones',
        icon: <LuHeadphones size={100} />
    },
    {
        title: 'Gaming',
        icon: <IoGameControllerOutline size={100} />
    },
    {
        title: 'HeadPhones',
        icon: <LuHeadphones size={100} />
    },
    {
        title: 'Gaming',
        icon: <IoGameControllerOutline size={100} />
    },
]