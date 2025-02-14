import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/banner/banner1.jpg";
import model4 from "../assets/banner/banner2.jpg";
import model5 from "../assets/model5.png";
import model6 from "../assets/model6.png";

const slides = [
  {
    id: 1,
    leftImage: model1,
    rightImage: model2,
    title: "WEAR YOUR ART, REDEFINE BOUNDARIES",
    description: "Streetwear infused with raw artistic expression—bold, loud, unapologetic.",
    price: "130K",
  },
  {
    id: 2,
    leftImage: model3,
    rightImage: model4,
    title: "REBELLION IN EVERY THREAD",
    description: "A fusion of art and fashion, crafted for the misfits and visionaries.",
    price: "130K",
  },
  {
    id: 3,
    leftImage: model5,
    rightImage: model6,
    title: "DISTORT THE ORDINARY",
    description: "Embrace chaos, redefine style, and let your outfit speak the unspoken.",
    price: "130K",
  },
];

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black to-red-900 relative overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1500}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="max-w-7xl mx-auto w-full px-4 py-8 md:py-12 lg:py-16 flex justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center transition-transform duration-700 ease-in-out transform translate-x-0 opacity-100">
                
                {/* Left Section */}
                <div className="relative aspect-square hidden lg:block bg-gradient-to-b from-black to-red-900">
                  <img
                    src={slide.leftImage}
                    alt="left"
                    loading="lazy"
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0  rounded-md"></div>
                </div>

                {/* Center Section */}
                <div className="relative w-full h-full bg-gradient-to-b from-black to-red-900 rounded-md">
                  <img
                    src={slide.rightImage}
                    alt="center"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Right Section*/}
                <div className="p-5 flex flex-col items-center sm:items-start font-[Orbitron] text-center sm:text-left space-y-6 mb-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-300">
                    {slide.title}
                  </h1>
                  <p className="text-gray-400 text-sm sm:text-lg max-w-md">
                    {slide.description}
                  </p>
                  <div className="mt-4 text-gray-400">
                    <span className="text-lg">Starting From</span>
                    <span className="text-xl font-semibold ml-2">{slide.price}</span>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scrolling Text Section */}
      <div className="absolute bottom-1  left-0 w-full bg-black py-4 overflow-hidden whitespace-nowrap flex">
        <div className="flex space-x-6 animate-scroll text-gray-200 font-[Orbitron] text-xl">
          {[...Array(10)]
            .flatMap(() => ["ART", "★", "ABSTRACT", "★", "STREETWEAR", "★"])
            .map((text, idx) => (
              <span key={idx} className="px-6">{text}</span>
            ))}
        </div>
        <div className="flex space-x-6 animate-scroll text-gray-200 font-[Orbitron] text-xl">
          {[...Array(10)]
            .flatMap(() => ["ART", "★", "ABSTRACT", "★", "STREETWEAR", "★"])
            .map((text, idx) => (
              <span key={idx} className="px-6">{text}</span>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
