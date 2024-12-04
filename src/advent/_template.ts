export const answers = [
  ['', ''], // real
  ['', ''],
]

//
//

export const part1 = (input = '') => {
  let total = 0

  input.split('\n').forEach((line) => {
    line.split(/ +/).forEach((word) => {
      //
      total += word.length
      //
    })
  })

  return total
}

export const part2 = (input = '') => {
  return input.length
}
