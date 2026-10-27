import { useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { ScrollProgress } from "../components/ScrollProgress";
import { Header } from "../components/header/Header";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Collections } from "../components/sections/Collections";
import { Footer } from "../components/Footer";
import { useMotionProfile } from "../contexts/MotionContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { ContentPage } from "./ContentPage";
function Home({ phase, onReveal, onDone, smoothScroll }) {
  const { isDesktop, reduced } = useMotionProfile();
  const locked = phase !== "done";
  useSmoothScroll({ enabled: smoothScroll && isDesktop && !reduced, locked, reduced });
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = locked ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [locked]);
  return <div className="min-h-screen w-full overflow-x-clip bg-ivory font-sans text-charcoal">{phase !== "done" && <Preloader onReveal={onReveal} onDone={onDone} />}<ScrollProgress /><Header /><main>{window.location.pathname === "/" ? <><Hero /><About /><Collections /><div className="bg-charcoal px-6 py-20 text-center text-ivory"><p className="font-display text-4xl">A material for every space.</p><a href="/products" className="mt-8 inline-block border-b border-brass pb-3 text-sm uppercase tracking-widest">Explore all products ?</a></div></> : <ContentPage />}</main><Footer /></div>;
}
export {
  Home
};
