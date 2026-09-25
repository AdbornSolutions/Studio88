// Signature easing for the whole site — calm, decelerating, no overshoot.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const EASE_CSS = 'cubic-bezier(0.22, 1, 0.36, 1)';

// Clip-path masks used for editorial image reveals.
export const CLIP_FROM = {
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
  bottom: 'inset(100% 0% 0% 0%)',
  vertical: 'inset(50% 0% 50% 0%)',
  none: 'inset(0% 0% 0% 0%)'
} as const;

export const CLIP_OPEN = 'inset(0% 0% 0% 0%)';

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}