import girassolImage from "../assets/girassol-very-small.png";
import { useEffect, useRef } from "react";

interface HeaderProps {
  onHeightChange?: (height: number) => void;
}

const Header = ({ onHeightChange }: HeaderProps) => {
  const headerSizeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerSizeRef.current && onHeightChange) {
      const headerHeight = headerSizeRef.current.offsetHeight;
      onHeightChange(headerHeight);
    }
  }, [onHeightChange]);

  return (
    <header
      ref={headerSizeRef}
      className="w-full top-0 left-0 z-50 bg-[#003366]"
    >
      <div className="flex justify-around items-center max-w-8xl px-6 py-2">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <img
            src={girassolImage}
            alt="Logo girassol"
            className="max-h-22 max-w-26"
          />

          <div className="flex flex-col items-start">
            <span className="text-[1.286rem] font-serif font-bold text-white">
              Thais Ferraz Pazzin
            </span>

            <span className="text-1xl italic text-white">
              Psicóloga | CRP 07/38927
            </span>
          </div>
        </div>

        <nav>
          <ul className="flex gap-5 justify-end whitespace-nowrap">
            <li>
              <a href="home"
                className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white 
                  hover:font-bold transition-colors"
              >Início
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Sobre mim
              </a>
            </li>

            <li>
              <a
                href="#psychotherapy"
                className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Psicoterapia
              </a>
            </li>

            <li>
              <a
                href="#workshops"
                className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Palestras e Workshops
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
