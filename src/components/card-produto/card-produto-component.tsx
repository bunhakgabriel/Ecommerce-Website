import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IProduto } from "../../interfaces/IProduto"
import { FaRegHeart } from "react-icons/fa";
import calcularDescontoPercentual from "../../utils/calcular-desconto-percentual";

interface CardProdutoProps {
    produto: IProduto;
}

function CardProduto({ produto }: CardProdutoProps) {

    const { nome, img, preco, desconto  } = produto

    return (
        <div className="w-[140px] flex flex-col gap-1 text-xs sm:w-[230px] sm:text-lg">
            <div className="bg-[#FAFAFA] rounded-[4px] flex h-[150px] sm:h-[230px]">
                <div className="flex flex-col w-[85%] justify-center">
                    {desconto != 0 && desconto && (
                        <div className="w-full text-amber-50 p-2" >
                            <span className="bg-[#FF0000] px-4 py-[2px] rounded-[4px]" >
                                {calcularDescontoPercentual(preco, desconto)}
                            </span>
                        </div>
                    )}
                    <img src={img.src} />
                </div>
                <div className="flex flex-col items-center w-[15%] gap-2 pt-5">
                    <FaRegHeart size={20} className="cursor-pointer" />
                    <MdOutlineRemoveRedEye size={25} className="cursor-pointer" />
                </div>
            </div>
            <h2 className="font-medium" >{nome}</h2>
            <p className="font-medium flex gap-6">
                <span className="text-[#FF0000]" >R$ {(preco - (desconto || 0)).toFixed(2)}</span>
                {desconto != 0 && desconto && (
                    <span className="text-[gray] line-through" >R${preco.toFixed(2)}</span>
                )}
            </p>
        </div>
    )
}

export default CardProduto