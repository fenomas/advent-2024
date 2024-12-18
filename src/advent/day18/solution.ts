import { Pathfinder } from 'abstract-pathfinder'

export const answers = [
  ['336', '24,30'], // real
  ['22', '6,1'],
]

//
//

const dirs = [
  [-1, 0], // N
  [0, 1], // E
  [1, 0], // S
  [0, -1], // W
]

const prepare = (input = '') => {
  const [si, sj, ct] = input.length < 1000 ? [7, 7, 12] : [71, 71, 1024]
  const locs = input.split('\n').map((line) => line.split(',').map(Number))

  const map = Array.from(Array(si)).map(() => Array.from(Array(sj)).fill('.'))
  const get = (i = 0, j = 0) => (map[i] && map[i][j]) || '#'
  const set = (i = 0, j = 0, v = '#') => {
    if (map[i]) map[i][j] = v
  }

  const finder = new Pathfinder<number[]>({
    nodeToPrimitive: (node) => node.join(','),
    getNeighbors: ([i, j]) => dirs.map(([di, dj]) => [i + di, j + dj]),
    getMoveCost: (_, [i, j]) => (get(i, j) === '.' ? 1 : -1),
    getHeuristic: (a, b) => {
      return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    },
  })
  return { si, sj, ct, locs, set, finder }
}

export const part1 = (input = '') => {
  const { si, sj, ct, locs, set, finder } = prepare(input)
  locs.forEach(([i, j], k) => k < ct && set(i, j, '#'))
  return finder.findPath([0, 0], [si - 1, sj - 1]).length - 1
}

export const part2 = (input = '') => {
  const { si, sj, locs, set, finder } = prepare(input)
  locs.forEach(([i, j]) => set(i, j, '#'))
  return locs.reverse().find(([i, j]) => {
    set(i, j, '.')
    const path = finder.findPath([0, 0], [si - 1, sj - 1])
    if (path.length !== 0) return [i, j].join(',')
  })
}
