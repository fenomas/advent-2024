export const answers = [
  ['3320', '★'], // real
  ['3', '★'],
]

//
//

export const part1 = (input = '') => {
  const keys = [[0]].slice(1)
  const locks = [[0]].slice(1)

  input.split('\n\n').forEach((line) => {
    const map = line.split('\n').map((s) => s.trim().split(''))
    const hts = map[0].map((_, i) => {
      return map.map((_, j) => map[j][i]).join('')
    })
    if (hts[0].startsWith('#')) locks.push(hts.map((s) => s.indexOf('.')))
    if (hts[0].startsWith('.')) keys.push(hts.map((s) => 6 - s.indexOf('#')))
  })

  const check = (lock = [0], key = [0]) => lock.every((l, i) => l + key[i] <= 6)
  return locks.reduce((acc, lock) => {
    return acc + keys.reduce((acc, key) => (check(lock, key) ? acc + 1 : acc), 0)
  }, 0)
}

export const part2 = () => '★'
