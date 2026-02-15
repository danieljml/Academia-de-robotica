import { CommunityIcon, GraduationCap, PuzzleIcon, TeamIcon } from '../components/Icons'

const Features = () => {
  const features = [
    { title: 'Our Team', icon: <TeamIcon size="32" />, color: 'bg-[#f9a825]' },
    { title: 'Kids Enrollment', icon: <CommunityIcon size="32" />, color: 'bg-[#ff2d78]' },
    { title: 'Alumni Club', icon: <GraduationCap size="32" />, color: 'bg-[#55ccff]' },
    { title: 'Best Amenities', icon: <PuzzleIcon size="32" />, color: 'bg-[#a3cc39]' },
  ]

  return (
    <section className=" bg-[#bde8ff] pt-24 pb-20 z-0 mt-[-80px] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            <div
              className={`${item.color} p-8 rounded-full text-white shadow-lg transition-transform group-hover:scale-110 mb-4`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
