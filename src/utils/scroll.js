/**
 * High-performance smooth scroll utility.
 * For mobile devices, it uses native browser smooth scroll to run on the compositor thread.
 * For desktop devices, it uses a custom requestAnimationFrame loop with an easeOutCubic curve
 * to start instantly and bypass potential system-level "Reduce Motion" overrides.
 * 
 * @param {number} targetY - The destination Y scroll coordinate.
 * @param {number} duration - Animation duration in milliseconds (for desktop custom scroll).
 */
export const smoothScrollTo = (targetY, duration = 350) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Native browser smooth scrolling is highly optimized on mobile compositor threads
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
    return;
  }

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
