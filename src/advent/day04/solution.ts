export const answers = [
  ['2575', '2041'], // real
  ['18', '9'],
]

//
//

export const part1 = (input = '') => {
  const lines = input.split('\n').map((line) => line.split(''))
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ]

  let total = 0
  lines.forEach((row, i) => {
    row.forEach((char, j) => {
      if (char !== 'X') return
      dirs.forEach(([di, dj]) => {
        const hit = 'XMAS'.split('').every((c, k) => get(i + k * di, j + k * dj) === c)
        if (hit) total++
      })
    })
  })
  return total
}

//

export const part2 = (input = '') => {
  const lines = input.split('\n').map((line) => line.split(''))
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

  const dirs = [
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ]

  let total = 0
  lines.forEach((row, i) => {
    row.forEach((char, j) => {
      if (char !== 'A') return
      const word = dirs.map(([dx, dy]) => get(i + dx, j + dy))
      if (word[0] === word[1]) return
      if (word.sort().join('') !== 'MMSS') return
      total++
    })
  })

  return total
}
