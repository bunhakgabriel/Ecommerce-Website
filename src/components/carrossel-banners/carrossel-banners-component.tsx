import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';

interface CarrosselBanners {
    imagens: { src: string, alt: string }[]
}

function CarrosselBanners({ imagens }: CarrosselBanners) {
    return (
        <div className="w-full sm:w-[70%] lg:w-[80%] flex items-center">
            <Swiper
                className="w-full"
                spaceBetween={10}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto rolagem
                modules={[Navigation, Pagination, Autoplay]}
                speed={1000}
            >
                {imagens.map(({ src, alt }, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={alt} />
                    </SwiperSlide>
                ))}
                <div className="h-[30px] md:h-[40px]"></div>
            </Swiper>
        </div>
    )
}

export default CarrosselBanners;