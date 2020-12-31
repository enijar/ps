export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function rad2deg(rad: number): number {
  return (180 / Math.PI) * rad;
}
