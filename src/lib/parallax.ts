import type { ParallaxMotion } from "@/hooks/useParallaxPointer";

export function layerTransform(
  motion: ParallaxMotion,
  depth: number,
  scrollFactor = 0,
  invert = false,
) {
  const sign = invert ? -1 : 1;
  const scrollY = motion.scroll * scrollFactor;
  const x = motion.x * depth * sign;
  const y = motion.y * depth * sign + scrollY;
  return `translate3d(${x}px, ${y}px, 0)`;
}

/** For blooms centered with `left: 50%` — keeps horizontal centering with parallax. */
export function layerTransformCentered(
  motion: ParallaxMotion,
  depth: number,
  scrollFactor = 0,
  invert = false,
) {
  const sign = invert ? -1 : 1;
  const scrollY = motion.scroll * scrollFactor;
  const x = motion.x * depth * sign;
  const y = motion.y * depth * sign + scrollY;
  return `translate(calc(-50% + ${x}px), ${y}px)`;
}
