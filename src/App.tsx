import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import CardCategory from "./components/card-category/card-category-component"
import CardProduto from "./components/card-produto/card-produto-component"
import TagLabelTitle from "./components/tag-label-title/tag-label-title-component"
import TitleSection from "./components/title-section/title-section-component"
import { categorias, produtos } from "./dados"
import { useEffect, useRef, useState } from "react"
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react"

function App() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstChildRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -cardWidth - 20, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
  };

  useEffect(() => {
    if (firstChildRef.current) {
      setCardWidth(firstChildRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="p-10 flex justify-center flex-col gap-10" >

      {/* Seção de produtos */}
      <div className="flex flex-wrap gap-5">
        {produtos.map(produto => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>

      {/* Seção de categorias */}
      <div className="flex flex-col gap-2" >
        <TagLabelTitle title='Categories' />
        <div className="flex justify-between pt-2 pb-8">
          <TitleSection title="Browse By Category" />
          <div className="flex items-center justify-center space-x-4">
            <button onClick={scrollLeft} className="cursor-pointer w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
              <FaChevronLeft className="text-xl text-gray-800" />
            </button>
            <button onClick={scrollRight} className="cursor-pointer w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
              <FaChevronRight className="text-xl text-gray-800" />
            </button>
          </div>
        </div>
        <div ref={scrollContainerRef} className="scrollbar-none flex gap-5 overflow-y-hidden py-6 box-border" >
          {categorias.map(({ title, icon }, index) => (
            <div ref={index === 0 ? firstChildRef : null} className="min-w-[18%]">
              <CardCategory
                className="min-w-[18%]"
                key={index}
                title={title}
                icon={icon}
              />
            </div>
          ))}
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categorias.map(({ title, icon }, index) => (
          <SwiperSlide>
            <CardCategory
              className="min-w-[18%]"
              key={index}
              title={title}
              icon={icon}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default App
