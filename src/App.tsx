import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import CardCategory from "./components/card-category/card-category-component"
import CardProduto from "./components/card-produto/card-produto-component"
import TagLabelTitle from "./components/tag-label-title/tag-label-title-component"
import TitleSection from "./components/title-section/title-section-component"
import { categorias, produtos } from "./dados"
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Swiper as SwiperType } from "swiper"
import Navbar from "./components/navbar/navbar-component"

function App() {

  let passar: SwiperType;

  const scrollLeft = () => {
    passar?.slidePrev();
  };

  const scrollRight = () => {
    passar?.slideNext();
  };

  return (
    <div className="p-2 sm:p-4 md:px-10 xl:px-30  flex justify-between flex-col gap-10" >

      <Navbar />

      {/* Seção de produtos */}
      <div className="flex flex-wrap items-center justify-center md:justify-normal gap-3 sm:gap-5">
        {produtos.map(produto => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>

      {/* Seção de categorias */}
      <div className="flex flex-col gap-2" >
        <TagLabelTitle title='Categories' />
        <div className="flex justify-between items-center mb-8 mt-2">
          <TitleSection title="Browse By Category" />
          <div className="flex items-center justify-center space-x-4">
            <button onClick={scrollLeft} className="cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
              <FaChevronLeft className="text-sm text-gray-800" />
            </button>
            <button onClick={scrollRight} className="cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200 transition">
              <FaChevronRight className="text-sm text-gray-800" />
            </button>
          </div>
        </div>
        <div className="max-w-full">
          <Swiper
            slidesPerView={5.2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => (passar = swiper)}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              300: {
                slidesPerView: 3.2,
                spaceBetween: 5
              },
              500: {
                slidesPerView: 4.2,
                spaceBetween: 10
              },
              640: {
                spaceBetween: 15
              },
              1000: {
                spaceBetween: 15
              },
              1150: {
                spaceBetween: 25
              },
            }}
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
      </div>

    </div>
  )
}

export default App
