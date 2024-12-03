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
  while (input) {
    const [match, nums] = input.match(/mul\((\d{1,3},\d{1,3})\)/) || []
    if (!match) break

    const [a, b] = nums.split(',').map((s) => +s)
    total += a * b
    input = input.slice(input.indexOf(match) + match.length)
  }
  return total
}

//
//
//

export const part2 = (input = '') => {
  let total = 0
  input.split("don't()").forEach((part, i) => {
    if (i === 0) {
      total += part1(part)
    } else {
      const bits = part.split('do()')
      bits.shift()
      total += part1(bits.join(''))
    }
  })
  return total
}
