import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import model1 from "../assets/model1.webp";
import model2 from "../assets/model2.webp";
import model3 from "../assets/banner1.webp";
import model4 from "../assets/banner2.webp";
import model5 from "../assets/model5.webp";
import model6 from "../assets/model6.webp";

const slides = [
  { id: 1, leftImage: model1, rightImage: model2, title: "WEAR YOUR ART, REDEFINE BOUNDARIES", description: "Streetwear infused with raw artistic expression—bold, loud, unapologetic.", price: "130K" },
  { id: 2, leftImage: model3, rightImage: model4, title: "REBELLION IN EVERY THREAD", description: "A fusion of art and fashion, crafted for the misfits and visionaries.", price: "130K" },
  { id: 3, leftImage: model5, rightImage: model6, title: "DISTORT THE ORDINARY", description: "Embrace chaos, redefine style, and let your outfit speak the unspoken.", price: "130K" }
];

const Hero = () => (
  <section className="w-full min-h-screen bg-gradient-to-b from-black to-red-900 relative overflow-hidden font-[orbitron]">
    <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 5000, disableOnInteraction: false }} speed={1500}>
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className="max-w-7xl mx-auto px-4 py-8 md:pt-12 lg:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center ">
              <div className="hidden lg:block aspect-square bg-gradient-to-b from-black to-red-900">
                <img src={slide.leftImage} alt="left" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full bg-gradient-to-b from-black to-red-900">
                <img src={slide.rightImage} alt="center" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className=" pt-5 md:px-5 flex flex-col space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-300 leading-tight ">{slide.title}</h1>
                <p className="text-sm sm:text-lg text-gray-400">{slide.description}</p>
                <div className="text-lg text-gray-400">Starting From <span className="font-semibold">{slide.price}</span></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Hero;
