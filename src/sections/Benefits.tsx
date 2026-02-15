import React from 'react'
import { BookSearchIcon, BrainIcon, BuildingIcon } from '../components/Icons'

interface FeatureItemProps {
  icon: React.ReactNode
  title: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      {icon}
      <p className="font-medium text-gray-800">{title}</p>
    </div>
  )
}

const BenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why Our Schools are the Right Fit for Your Child?
          </h2>

          <p className="text-white/80 max-w-md">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
            laoreet.
          </p>

          <div className="space-y-4 pt-6 ">
            <FeatureItem icon={<BrainIcon color="#ff236c" size={40} />} title="Well Trained Professionals" />
            <FeatureItem icon={<BuildingIcon color="#64c8ff" size={40} />} title="Awesome Infra-Structure" />
            <FeatureItem icon={<BookSearchIcon color="#ffc259" size={40} />} title="International Lesson Patterns" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow shadow-2xl">
            <img
              src="/classworks.webp" // cambia por tu imagen
              alt="Kids learning"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
