export const answers = [
  ['557', '1062'], // real
  ['36', '81'],
]

//
//
const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

export const part1 = (input = '') => {
  const nines = new Set<string>()
  const lines = input.split('\n').map((line, i) =>
    line.split('').map((char, j) => {
      if (char === '9') nines.add([i, j].join(','))
      return char
    })
  )
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

  return nines.keys().reduce((total, loc) => {
    let curr = new Set<string>()
    curr.add(loc)

    for (let k = 9; k > 0; k--) {
      const lower = new Set<string>()
      curr.keys().forEach((loc) => {
        const [i, j] = loc.split(',').map(Number)
        dirs.forEach(([di, dj]) => {
          const ht = get(i + di, j + dj)
          if (ht === String(k - 1)) {
            lower.add([i + di, j + dj].join(','))
          }
        })
      })
      curr = lower
    }

    return total + curr.size
  }, 0)
}

export const part2 = (input = '') => {
  const nines = new Map<string, number>()
  const lines = input.split('\n').map((line, i) =>
    line.split('').map((char, j) => {
      if (char === '9') nines.set([i, j].join(','), 1)
      return char
    })
  )
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

  let curr = nines
  for (let k = 9; k > 0; k--) {
    const lower = new Map<string, number>()
    curr.entries().forEach(([loc, ct]) => {
      const [i, j] = loc.split(',').map(Number)
      dirs.forEach(([di, dj]) => {
        const ht = get(i + di, j + dj)
        if (ht === String(k - 1)) {
          const key = [i + di, j + dj].join(',')
          const lowerct = lower.get(key) || 0
          lower.set(key, ct + lowerct)
        }
      })
    })
    curr = lower
  }
  return curr.values().reduce((a, b) => a + b)
}
