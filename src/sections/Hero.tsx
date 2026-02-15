// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const benefits = [
  'Creative Lesson Plans',
  '1,000+ Worksheets & Craft Sheets',
  'Weekly Academic Training for Kids',
  'Universal Workshop for Childrens',
]
const Hero = () => {
  return (
    <div className="z-10 w-full">
      <Swiper
        className="hero-swiper"
        modules={[Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop
        effect="fade"
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          style={{
            backgroundImage: "url('/slider/slider1-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        >
          <div className="grid grid-cols-2 gap-2 h-full">
            <div></div>
            <div className="grid items-center justify-items-start content-center pl-4">
              <h1 className="md:text-5xl font-bold leading-tight tracking-tight">
                <span className="text-[#6d28d9]">Practical teaching &</span>
                <br />
                <span className="text-[#f59e0b]">Social Development</span>
              </h1>

              {/* Descripción */}
              <p className="mt-6 text-gray-800 font-semibold max-w-lg leading-relaxed">
                We aim at success by creating skills necessary for kids to enrich & empower in studies & sports.
              </p>

              {/* Botón */}
              <button className="mt-10 bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FF2D55] cursor-pointer transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: "url('/slider/slider2-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        >
          <div className="grid grid-cols-2 gap-2 h-full max-w-7xl mx-auto">
            <div className="grid items-center justify-items-start content-center pl-4">
              <h1 className="md:text-5xl font-bold leading-tight tracking-tight">
                <span className="text-[#00aeef]">Empowering students</span> from
                <br />
                small age <span className="text-[#f9a825]">towards vision.</span>
              </h1>

              <p className="mt-6 text-gray-800 font-semibold max-w-lg leading-relaxed">
                With the courage, Confidence, Creativity and Compassion to make their Unique Contribution in a Diverse
                and Dynamic World.
              </p>

              <button className="mt-10 bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FF2D55] cursor-pointer transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                Enroll Now
              </button>
            </div>
            <div></div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: "url('/slider/slider3-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        >
          <div className="grid grid-cols-2 gap-2 h-full">
            <div></div>
            <div className="grid items-center justify-items-start content-center pl-4">
              <header className="mb-8">
                <p className="text-[#6d28d9] text-2xl font-bold mb-2">' Fun In School '</p>
                <h2 className="text-[#ec4899] text-5xl font-bold">Creative Learning</h2>
              </header>

              <ul className="space-y-4 mb-10">
                {benefits.map((text, index) => (
                  <li key={index} className="flex items-center gap-3 font-semibold text-gray-800">
                    <span className="border-2 border-black rounded-full p-0.5">
                      <span>😊</span>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <button className="mt-6 bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FF2D55] cursor-pointer transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
