const NAV_ITEMS = [
  { label: 'Inicio', color: '#8BC34A' },
  { label: 'Nosotros', color: '#00BCD4' },
  // { label: 'Instalaciones', color: '#2dff2d' },
  { label: 'Blog', color: '#FF2D55' },
  // { label: 'Admisión', color: '#3F51B5' },
  { label: 'Alumnos', color: '#FF9800' },
  // { label: 'Tienda', color: '#E91E63' },
  { label: 'Contacto', color: '#9C27B0' },
]

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-4 px-4 py-3 max-w-7xl mx-auto px-4 sm:px-6 ">
      <div className="flex items-center gap-3">
        <img src="/logo.jpg" alt="logo" className="w-16 h-16 rounded-md object-cover" />
        <p className="font-bold text-4xl tracking-wide pt-4">AVR</p>
      </div>

      <ul className="hidden sm:flex items-center gap-6 list-none m-0 p-0">
        {NAV_ITEMS.map(item => (
          <li key={item.label} className="relative group cursor-pointer" style={{ color: item.color }}>
            <span className="font-semibold">{item.label}</span>

            <span className="absolute left-1/2 -bottom-1 h-[3px] w-0 bg-current transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </ul>

      <button className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:bg-white/6">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar
