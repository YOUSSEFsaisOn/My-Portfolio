/**
 * Programmatically and swiftly scrolls to a target vertical position using an optimized cubic easing curve.
 * This is significantly faster and feels more responsive than native browser `behavior: "smooth"`,
 * which has a slow, non-configurable timing curve.
 *
 * @param targetY The destination vertical scroll offset in pixels.
 * @param duration The duration of the transition in milliseconds. Defaults to 450ms for extremely snappy scroll.
 */
export function swiftScrollTo(targetY: number, duration: number = 450) {
  if (typeof window === "undefined") return;

  const startY = window.scrollY;
  const difference = targetY - startY;

  // If the scroll distance is negligible, jump immediately
  if (Math.abs(difference) < 2) {
    window.scrollTo(0, targetY);
    return;
  }

  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Cubic easeOut curve for snappy beginning and buttery deceleration at the end
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + difference * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
