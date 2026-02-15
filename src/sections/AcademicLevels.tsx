import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ArrowLeftIcon, ArrowRightIcon } from '../components/Icons'

interface EducationCard {
  id: number
  title: string
  ageRange?: string
  description: string
  imageUrl: string
  color: string
  gradientFrom: string
}

const data: EducationCard[] = [
  {
    id: 1,
    title: 'Kinder',
    ageRange: '(3-6) Years',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient',
    imageUrl: '/academic-3.png',
    color: '#00BCD4',
    gradientFrom: 'from-blue-50/50',
  },
  {
    id: 2,
    title: 'Elementary School',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient',
    imageUrl: '/academic-1.png',
    color: '#d6e100',
    gradientFrom: 'from-orange-50/50',
  },
  {
    id: 3,
    title: 'Middle',
    ageRange: '(10-16) Years',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient',
    imageUrl: '/academic-2.png',
    color: '#9810fa',
    gradientFrom: 'from-purple-50/50',
  },
  {
    id: 4,
    title: 'Elementary School',
    description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient',
    imageUrl: '/academic-1.png',
    color: '#d6e100',
    gradientFrom: 'from-orange-50/50',
  },
]

const EducationSlider = () => {
  return (
    <div className="pt-15">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-center">Standard Curriculum</h2>

      <div className="mt-6 flex justify-center items-center">
        <div className="h-[2px] w-24 bg-pink-200 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-10 bg-pink-400 rounded-full" />
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-white">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          // Añadimos un padding inferior para que los puntos de paginación no tapen los botones
          className="mySwiper academic-swiper"
        >
          {data.map(item => (
            <SwiperSlide key={item.id} className="py-10 px-2">
              <div
                className={`
        h-full flex flex-col items-center text-center p-8 
        rounded-[2.5rem] border border-gray-100/50
        bg-gradient-to-b ${item.gradientFrom} to-white
        transition-all duration-300 hover:-translate-y-2
        relative overflow-hidden
      `}
                style={{
                  /* 1. Sombra externa (hacia arriba y abajo)
           2. Sombra INTERNA (inset) en la parte superior con el color del botón 
        */
                  boxShadow: `
          0 -15px 30px -5px rgba(0,0,0,0.02), 
          0 20px 25px -5px rgba(0,0,0,0.1),
          inset 0 20px 40px -15px ${item.color}35
        `,
                  /* Nota: ${item.color}33 añade un 20% de transparencia al color en hex */
                }}
              >
                <div className="w-40 h-40 mb-8 flex items-center justify-center">
                  <img src={item.imageUrl} alt={item.title} className="max-w-full max-h-full object-contain" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title} {item.ageRange && <span className="block sm:inline">{item.ageRange}</span>}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-8 text-sm">{item.description}</p>

                <div className="relative group mt-auto">
                  <button className="font-bold text-lg transition-all cursor-pointer" style={{ color: item.color }}>
                    Read More
                  </button>
                  <span
                    className="absolute left-1/2 -bottom-1 h-[3px] w-0 transition-all duration-300 group-hover:w-full group-hover:left-0"
                    style={{ backgroundColor: item.color }}
                  ></span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center gap-4 mt-8">
            <button className="prev-btn w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg hover:bg-amber-600 transition-all active:scale-95 cursor-pointer z-10">
              <ArrowLeftIcon size={28} />
            </button>
            <button className="next-btn w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg hover:bg-amber-600 transition-all active:scale-95 cursor-pointer z-10">
              <ArrowRightIcon size={28} />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default EducationSlider
