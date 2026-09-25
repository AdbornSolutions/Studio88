import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMotionProfile } from "../../contexts/MotionContext";
import { navItems } from "../../data/navigation";
import { EASE } from "../../utils/motion";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { ready, reduced } = useMotionProfile();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  };
  const closeAll = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(false);
    setMobileOpen(false);
  };

  const solid = scrolled || megaOpen || mobileOpen;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: reduced ? 0 : -12 }}
      animate={ready ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1, delay: reduced ? 0 : 0.3, ease: EASE }}
      onMouseLeave={closeMega}
    >
      <div
        className={`relative border-b transition-[background-color,border-color,box-shadow,color,backdrop-filter] duration-500 ease-lux ${
          solid
            ? "border-charcoal/10 bg-ivory/90 text-charcoal shadow-[0_1px_30px_rgba(32,32,30,0.05)] backdrop-blur-md"
            : "border-transparent bg-transparent text-ivory"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
          <a
            href="#home"
            onClick={closeAll}
            aria-label="STUDIO88 by MPI — home"
            className={`block origin-left transition-transform duration-500 ease-lux ${scrolled ? "scale-95" : "scale-100"}`}
          >
            <img
              src="/logo-studio-88.png"
              alt="STUDIO88 by MPI"
              className="h-16 w-[6rem] object-cover object-[center_22%]"
            />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.mega ? (
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-controls="mega-menu"
                      onMouseEnter={openMega}
                      onClick={() =>
                        megaOpen ? setMegaOpen(false) : openMega()
                      }
                      className="nav-link text-[12px] font-medium uppercase tracking-[0.18em] opacity-80 transition-opacity duration-300 hover:opacity-100 aria-expanded:opacity-100"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onMouseEnter={closeMega}
                      onClick={closeAll}
                      className="nav-link text-[12px] font-medium uppercase tracking-[0.18em] opacity-80 transition-opacity duration-300 hover:opacity-100"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              onClick={closeAll}
              className="nav-link hidden whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.18em] md:inline-block"
            >
              Book a Visit
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="-mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
            >
              {mobileOpen ? (
                <XIcon className="h-5 w-5" strokeWidth={1.25} />
              ) : (
                <MenuIcon className="h-5 w-5" strokeWidth={1.25} />
              )}
            </button>
          </div>
        </div>

        <MegaMenu open={megaOpen} onEnter={openMega} onNavigate={closeAll} />
        <MobileMenu open={mobileOpen} onClose={closeAll} />
      </div>
    </motion.header>
  );
}
