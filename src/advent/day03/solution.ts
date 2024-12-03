//

export const answers = [
  ['187833789', '94455185'], // real
  ['161', '161'],
  ['161', '48'],
]

//
//
//

export const part1 = (input = '') => {
  let total = 0

  input.matchAll(/mul\((\d{1,3},\d{1,3})\)/g)?.forEach(([, nums]) => {
    const [a, b] = nums.split(',').map((s) => +s)
    total += a * b
  })

  return total
}

//
//
//

export const part2 = (input = '') => {
  let total = 0
  input = 'do()' + input

  input.split("don't()").forEach((part) => {
    const [, ...doPart] = part.split('do()')
    total += part1(doPart.join(''))
  })

  return total
}
