import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/3 right-4 z-50">
      
      <div className="flex flex-col items-center gap-6 px-3 py-6 rounded-2xl 
                      bg-white/10 backdrop-blur-lg shadow-lg border border-white/20">

        <a href="https://www.linkedin.com/company/ecell-abes-ec/" className="text-yellow-400 hover:scale-110 transition">
          <FaLinkedin size={22} />
        </a>

        <a href="https://www.instagram.com/ecell_abesec/" className="text-yellow-400 hover:scale-110 transition">
          <FaInstagram size={22} />
        </a>

        <a href="https://x.com/ecell_abesec" className="text-yellow-400 hover:scale-110 transition">
          <FaTwitter size={22} />
        </a>

        <a href="https://www.youtube.com/@E-CELL_ABESEC" className="text-yellow-400 hover:scale-110 transition">
          <FaYoutube size={22} />
        </a>

        <a href="https://www.facebook.com/abes.ecell/" className="text-yellow-400 hover:scale-110 transition">
          <FaFacebook size={22} />
        </a>

      </div>
    </div>
  );
}