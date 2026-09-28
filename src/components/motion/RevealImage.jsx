import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useMotionProfile } from "../../contexts/MotionContext";
import { CLIP_FROM, CLIP_OPEN, EASE } from "../../utils/motion";
function RevealImage({
  src,
  alt,
  className = "",
  innerClassName = "",
  direction = "none",
  duration = 1.4,
  delay = 0,
  parallax = 0,
  fill = false,
  priority = false,
  when,
  children
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const { d, ds, reduced, isDesktop } = useMotionProfile();
  const show = when ?? inView;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const useParallax = parallax > 0 && isDesktop && !reduced;
  const y = useTransform(scrollYProgress, [0, 1], useParallax ? [`-${parallax}%`, `${parallax}%`] : ["0%", "0%"]);
  const clipFrom = reduced ? CLIP_OPEN : CLIP_FROM[direction];
  return <motion.div
    ref={ref}
    data-cursor="image"
    className={`${fill ? "absolute inset-0" : "relative"} overflow-hidden ${className}`}
    initial={{ clipPath: clipFrom }}
    animate={show ? { clipPath: CLIP_OPEN } : void 0}
    transition={{ duration: d(duration), delay: reduced ? 0 : delay, ease: EASE }}
  ><motion.div
    className="absolute inset-x-0"
    style={useParallax ? { y, top: `-${parallax}%`, bottom: `-${parallax}%` } : { top: 0, bottom: 0 }}
  ><div className={`absolute inset-0 ${innerClassName}`}><motion.img
    src={src}
    alt={alt}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    draggable={false}
    className="h-full w-full object-cover"
    initial={{ opacity: 0, scale: ds(1.08) }}
    animate={show ? { opacity: 1, scale: 1 } : void 0}
    transition={{ duration: d(duration + 0.2), delay: reduced ? 0 : delay, ease: EASE }}
  /></div></motion.div>{children}</motion.div>;
}
export {
  RevealImage
};
