import { IProduto } from "../../interfaces/IProduto";
import CardProduto from "../card-produto/card-produto-component";
import TagLabelTitle from "../tag-label-title/tag-label-title-component";
import TitleSection from "../title-section/title-section-component";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarrosselProdutosProps {
    produtos: IProduto[];
    tagLabel?: string;
    titulo: string;
}

function CarrosselProdutos({ produtos, tagLabel, titulo }: CarrosselProdutosProps) {
    let passar: SwiperType;

    const scrollLeft = () => {
        passar?.slidePrev();
    };

    const scrollRight = () => {
        passar?.slideNext();
    };

    return (
        <div className="py-section flex flex-col gap-5 w-full">
            {tagLabel && <TagLabelTitle title={tagLabel} />}
            <div className="flex justify-between items-center mb-5">
                <TitleSection title={titulo} />
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={scrollLeft} className="cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
                        <FaChevronLeft className="text-sm text-gray-800" />
                    </button>
                    <button onClick={scrollRight} className="cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
                        <FaChevronRight className="text-sm text-gray-800" />
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-7">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={4.4}
                    onSwiper={(swiper) => (passar = swiper)}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        300: {
                            slidesPerView: 2.2,
                        },
                        500: {
                            slidesPerView: 3.2,
                        },
                        1024: {
                            spaceBetween: 20,
                            slidesPerView: 4.3
                        },
                        1150: {
                            spaceBetween: 25
                        },
                    }}
                >
                    {produtos.map(produto => (
                        <SwiperSlide key={produto.id}>
                            <CardProduto carrossel={true} produto={produto} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CarrosselProdutos;