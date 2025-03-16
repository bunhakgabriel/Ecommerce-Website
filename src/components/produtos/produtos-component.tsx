import { IProduto } from "../../interfaces/IProduto";
import ButtonUi from "../button-ui/button-ui-component";
import CardProduto from "../card-produto/card-produto-component";
import TagLabelTitle from "../tag-label-title/tag-label-title-component";
import TitleSection from "../title-section/title-section-component";

interface ProdutosProps {
    produtos: IProduto[];
    tagLabel?: string;
    titulo: string;
    button?: boolean
}

function Produtos({ produtos, tagLabel, titulo, button }: ProdutosProps) {
    return (
        <div>
            {tagLabel && <TagLabelTitle title={tagLabel} />}
            <div className="mb-11 mt-5 flex justify-between">
                <TitleSection title={titulo} />
                {button && <ButtonUi>View All</ButtonUi>}
            </div>
            <div className="py-section flex flex-wrap justify-between gap-y-7">
                {produtos.map(produto => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    )
}

export default Produtos;