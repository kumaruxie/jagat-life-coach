/**
 * High-performance smooth scroll utility.
 * Runs on requestAnimationFrame, starts instantly by using performance.now() at call time
 * to eliminate scheduling lag.
 * 
 * @param {number} targetY - The destination Y scroll coordinate.
 * @param {number} duration - Animation duration in milliseconds.
 */
export const smoothScrollTo = (targetY, duration = 350) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  
  if (Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    return;
  }

  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Snappy easeOutCubic (fast start, smooth deceleration)
    // Formula: 1 - (1 - x)^3
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY); // Ensure final position is exact
    }
  };

  requestAnimationFrame(step);
};
