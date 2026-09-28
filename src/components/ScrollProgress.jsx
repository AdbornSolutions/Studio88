import { motion, useScroll } from "framer-motion";
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div
    aria-hidden="true"
    className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brass/80"
    style={{ scaleX: scrollYProgress }}
  />;
}
export {
  ScrollProgress
};
