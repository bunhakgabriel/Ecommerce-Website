import { IImage } from "../../interfaces/IImage"

interface SessaoBannerProps {
    imagem: IImage
    className?: string
    title: string
    text: string
    sm?: boolean
}

function SessaoBanner({ imagem, className, title, text, sm }: SessaoBannerProps) {
    return (
        <div className={`${className} relative text-white`}>
            <img className="h-full w-full" src={imagem.src} alt={imagem.alt} />
            <div className={`${sm ? 'max-w-full lg:max-w-4/5 p-2 lg:p-4 lg:gap-1' : 'max-w-2/3 p-4 lg:p-6 gap-2'} absolute bottom-0 flex flex-col`}>
                <h1 className={`${sm ? 'text-sm lg:text-[16px]' : 'text-xs lg:text-xl'}`}>{title}</h1>
                <p className={`${sm ? 'text-[10px] lg:text-xs' : 'text-xs lg:text-sm'}`}>{text}</p>
                <a className={`${sm ? 'text-[10px] lg:text-xs' : 'text-xs lg:text-[18px]'} underline underline-offset-4 cursor-pointer`}>Shop Now</a>
            </div>
        </div>
    )
}

export default SessaoBanner;