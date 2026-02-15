import { MailOutline, Facebook, Instagram, PhoneIcon, Twitter, WhatsApp } from '../Icons'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-slate-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span aria-hidden className="text-sky-400">
                <MailOutline color="#e2e8f0" />
              </span>
              <span className="">info@example.com</span>
            </span>

            <span className="flex items-center gap-2">
              <span aria-hidden className="text-emerald-400">
                <PhoneIcon color="#e2e8f0" />
              </span>
              <span className=" ">8 888 567.890.03</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="text-slate-200/80 hover:text-white">
              <Facebook size="22" />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-slate-200/80 hover:text-white">
              <WhatsApp />
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-200/80 hover:text-white">
              <Instagram />
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-200/80 hover:text-white">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
