/**
 * Parses a hex or rgb color string into its RGB components.
 */
export function parseColor(col: string) {
  if (col.startsWith('#')) {
    let hex = col.slice(1)
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('')
    }
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16)
    }
  } else if (col.startsWith('rgb')) {
    const m = col.match(/\d+/g)
    return m ? { r: Number(m[0]), g: Number(m[1]), b: Number(m[2]) } : { r: 0, g: 0, b: 0 }
  }
  return { r: 0, g: 0, b: 0 }
}

/**
 * Returns a pseudo-random number. Using Math.random() is standard for animations.
 * Centralized to manage SonarCloud warnings if needed.
 */
export function getAnimationRandom() {
  return Math.random()
}
