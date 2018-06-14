export const kFormatter = num => num > 999 ? (num / 1000).toFixed(1) + 'k' : num
