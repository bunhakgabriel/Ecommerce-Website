import { IImage } from "./IImage";

export interface IProduto {
    id: string;
    nome: string;
    img: IImage;
    preco: number;
    imageSecundarias?: IImage[];
    desconto?: number;
}


