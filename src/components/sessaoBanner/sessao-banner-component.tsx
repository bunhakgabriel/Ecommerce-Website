import { IImage } from "../../interfaces/IImage"

interface SessaoBannerProps {
    imagem: IImage
    className?: string
    title: string
    text: string
}

function SessaoBanner({ imagem, className }: SessaoBannerProps) {
    return (
        <div className={`${className} relative`}>
            <img className="h-full w-full" src={imagem.src} alt={imagem.alt} />
            {/* <div className="absolute bottom-0 p-4 max-w-2/3 flex flex-col gap-2">
                <h1 className="text-xl">{title}</h1>
                <p className="text-sm">{text}</p>
                <a className="underline underline-offset-4">Shop Now</a>
            </div> */}
        </div>
    )
}

export default SessaoBanner;