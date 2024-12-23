export const answers = [
  ['16619522798', '1854'], // real
  ['37327623', '24'],
]

//
//

const mask = (1 << 24) - 1
const evolve = (num: number, iter = 1) => {
  while (iter-- > 0) {
    num = (num ^ (num << 6)) & mask
    num = num ^ (num >> 5) // & mask
    num = (num ^ (num << 11)) & mask
  }
  return num
}

export const part1 = (input = '') =>
  input //
    .split('\n')
    .reduce((acc, line) => acc + evolve(Number(line), 2000), 0)

export const part2 = (input = '') => {
  const lookup = new Map()
  const keyMask = (1 << 28) - 1

  let best = 0
  input.split('\n').forEach((line) => {
    const seen = new Set()
    let num = Number(line)
    let prev = 0
    let key = 0
    for (let i = 0; i < 2000; i++) {
      num = evolve(num)
      const price = num % 10
      const diff = price - prev + 9
      key = ((key << 7) | diff) & keyMask
      prev = price
      if (!seen.has(key) && i >= 5) {
        seen.add(key)
        const tot = (lookup.get(key) || 0) + price
        lookup.set(key, tot)
        if (tot > best) best = tot
      }
    }
  })

  return best
}
