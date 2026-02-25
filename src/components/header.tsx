import girassolImage from "/girassol-very-small.webp";
import { useEffect, useRef, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onHeightChange?: (height: number) => void;
}

const NAV_LINKS = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre mim" },
  { href: "#psychotherapy", label: "Psicoterapia" },
  { href: "#workshops", label: "Palestras e Workshops" },
  { href: "#contact", label: "Contato" },
];

const DESKTOP_LINK_CLASS = "px-2 py-2 xl:px-4 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out inline-block";
const MOBILE_LINK_CLASS = "block px-3 py-2 text-sm sm:text-base rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-500 ease-in-out";
const MENU_ITEM_DELAY_MS = 200;

const Header = ({ onHeightChange }: HeaderProps) => {
  const headerSizeRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 500);
  }, []);

  const handleToggleMenu = useCallback(() => {
    if (isMenuOpen) {
      handleCloseMenu();
    } else {
      setIsMenuOpen(true);
    }
  }, [isMenuOpen, handleCloseMenu]);

  useEffect(() => {
    if (headerSizeRef.current && onHeightChange) {
      const headerHeight = headerSizeRef.current.offsetHeight;
      onHeightChange(headerHeight);
    }
  }, [onHeightChange]);

  const updateScrollState = useCallback(() => {
    const hasScrolled = window.scrollY > 0;
    setIsScrolled(hasScrolled);
  }, []);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let previousScrollY = window.scrollY;

    const shouldProcessScroll = (currentScrollY: number): boolean => {
      return previousScrollY !== currentScrollY;
    };

    const processScrollChange = () => {
      const currentScrollY = window.scrollY;

      if (shouldProcessScroll(currentScrollY)) {
        previousScrollY = currentScrollY;
        updateScrollState();
      }

      animationFrameId = null;
    };

    const scheduleScrollUpdate = () => {
      if (animationFrameId !== null) return;

      animationFrameId = requestAnimationFrame(processScrollChange);
    };

    const cancelPendingAnimation = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', scheduleScrollUpdate);
      cancelPendingAnimation();
    };
  }, [updateScrollState]);

  return (
    <header
      ref={headerSizeRef}
      className={`fixed w-full top-0 left-0 z-50 bg-[#003366] overflow-x-clip transition-shadow duration-300 ${
        isScrolled ? "shadow-xl" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-337.5 mx-auto pl-4">
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 shrink">
          <img
            src={girassolImage}
            alt="Logo de girassol"
            className="h-12 w-12 sm:h-16 sm:w-16 md:max-h-22 md:max-w-26 shrink-0 scale-135 origin-center translate-y-1"
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

        {/* Nav Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex gap-3 xl:gap-5 whitespace-nowrap text-sm xl:text-base">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={DESKTOP_LINK_CLASS}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Hambúrguer Mobile */}
        <button
          className="lg:hidden text-yellow-400 p-1 sm:p-2 shrink-0"
          onClick={handleToggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {(isMenuOpen || isMenuClosing) && (
        <div className={`lg:hidden bg-[#003366] border-t border-yellow-400 w-full overflow-hidden ${
          isMenuClosing ? 'animate-[menuClose_0.5s_ease-in_forwards]' : 'animate-[menuOpen_1.5s_ease-out]'
        }`}>
          <nav className="max-w-337.5 mx-auto px-2 xs:px-3 sm:px-6 py-4">
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }, index) => (
                <li
                  key={href}
                  className="animate-[slideDown_0.4s_ease-out]"
                  style={{ animationDelay: `${index * MENU_ITEM_DELAY_MS}ms`, animationFillMode: 'backwards' }}
                >
                  <a href={href} className={MOBILE_LINK_CLASS} onClick={handleCloseMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
