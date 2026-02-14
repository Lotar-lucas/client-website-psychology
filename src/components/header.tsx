import girassolImage from "../assets/girassol-very-small.png";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onHeightChange?: (height: number) => void;
}

const Header = ({ onHeightChange }: HeaderProps) => {
  const headerSizeRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (headerSizeRef.current && onHeightChange) {
      const headerHeight = headerSizeRef.current.offsetHeight;
      onHeightChange(headerHeight);
    }
  }, [onHeightChange]);

  return (
    <header
      ref={headerSizeRef}
      className="w-full top-0 left-0 z-50 bg-[#003366] overflow-x-hidden"
    >
      <div className="flex justify-between items-center w-full max-w-337.5 mx-auto">
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 shrink">
          <img
            src={girassolImage}
            alt="Logo de girassol"
            className="h-12 w-12 sm:h-16 sm:w-16 md:max-h-22 md:max-w-26 shrink-0"
          />

          <div className="flex flex-col items-start min-w-0">
            <span className="text-md sm:text-base md:text-[1.286rem] font-serif font-bold text-white 
            leading-tight truncate w-full">
              Thais Ferraz Pazzin
            </span>

            <span className="text-sm sm:text-sm md:text-1xl italic text-white truncate w-full">
              Psicóloga | CRP 07/38927
            </span>
          </div>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-3 xl:gap-5 whitespace-nowrap text-sm xl:text-base">
            <li>
              <a href="home"
                className="px-2 py-2 xl:px-4 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white 
                  hover:font-bold transition-colors"
              >Início
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="px-2 py-2 xl:px-4 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Sobre mim
              </a>
            </li>

            <li>
              <a
                href="#psychotherapy"
                className="px-2 py-2 xl:px-4 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Psicoterapia
              </a>
            </li>

            <li>
              <a
                href="#workshops"
                className="px-2 py-2 xl:px-4 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Palestras e Workshops
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="px-2 py-2 xl:px-4 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Hambúrguer Mobile */}
        <button
          className="lg:hidden text-yellow-400 p-1 sm:p-2 shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#003366] border-t border-yellow-400 w-full">
          <nav className="max-w-337.5 mx-auto px-2 xs:px-3 sm:px-6 py-4">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="home"
                  className="block px-3 py-2 text-sm sm:text-base rounded-full text-yellow-300 hover:bg-yellow-400
                  hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="block px-3 py-2 text-sm sm:text-base rounded-full text-yellow-300 hover:bg-yellow-400
                  hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre mim
                </a>
              </li>

              <li>
                <a
                  href="#psychotherapy"
                  className="block px-3 py-2 text-sm sm:text-base rounded-full text-yellow-300 hover:bg-yellow-400
                  hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Psicoterapia
                </a>
              </li>

              <li>
                <a
                  href="#workshops"
                  className="block px-3 py-2 text-sm sm:text-base rounded-full text-yellow-300 hover:bg-yellow-400
                  hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Palestras e Workshops
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-sm sm:text-base rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
