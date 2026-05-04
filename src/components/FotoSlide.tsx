import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "/IMG_8337.JPG.jpeg",
  "/IMG_8338.JPG.jpeg",
  "/IMG_8339.JPG.jpeg",
];

export default function Slider() {
  return (
    
      <Swiper className="w-full h-full" spaceBetween={0} slidesPerView={1}>
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={img}
                alt={`Image ${i}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
  );
}