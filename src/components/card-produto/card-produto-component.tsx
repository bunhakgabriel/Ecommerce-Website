import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IProduto } from "../../interfaces/IProduto"
import { FaRegHeart } from "react-icons/fa";
import calcularDescontoPercentual from "../../utils/calcular-desconto-percentual";

interface CardProdutoProps {
    produto: IProduto;
    carrossel?: boolean;
}

function CardProduto({ produto, carrossel }: CardProdutoProps) {

    const { nome, img, preco, desconto } = produto
    const classe = carrossel ? '' : 'w-[48%] sm:w-[32%] lg:w-[23%] text-xs sm:text-sm md:text-sm lg:text-lg';

    return (
        <div className={`${classe} flex flex-col gap-1`}>
            <div className="bg-[#FAFAFA] rounded-[4px] flex">
                <div className="flex flex-col w-[85%] justify-center">
                    <div className={`${desconto != 0 && desconto ? 'opacity-100' : 'opacity-0'} w-full text-amber-50 p-2`} >
                        <span className="bg-[#FF0000] px-4 py-[2px] rounded-[4px]" >
                            {calcularDescontoPercentual(preco, (desconto || 0))}
                        </span>
                    </div>
                    <img src={img.src} />
                </div>
                <div className="flex flex-col items-center w-[15%] gap-2 pt-5">
                    <FaRegHeart className="text-lg sm:text-xl cursor-pointer" />
                    <MdOutlineRemoveRedEye className="text-xl sm:text-2xl cursor-pointer" />
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