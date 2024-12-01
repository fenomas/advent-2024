export const solutionMods = import.meta.glob('../advent/day*/solution.ts', {
  eager: true,
})

export const inputMods = import.meta.glob('../advent/day*/input*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})
