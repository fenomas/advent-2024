export const answers = [
  ['', ''], // real
  ['', ''],
]

//
//

export const part1 = (input = '') => {
  // const lines = input.split('\n').map((line) => line.split(''))
  // const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

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
