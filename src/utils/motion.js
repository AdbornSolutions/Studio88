const EASE = [0.22, 1, 0.36, 1];
const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
const CLIP_FROM = {
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
  bottom: "inset(100% 0% 0% 0%)",
  vertical: "inset(50% 0% 50% 0%)",
  none: "inset(0% 0% 0% 0%)"
};
const CLIP_OPEN = "inset(0% 0% 0% 0%)";
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
export {
  CLIP_FROM,
  CLIP_OPEN,
  EASE,
  EASE_CSS,
  clamp
};
