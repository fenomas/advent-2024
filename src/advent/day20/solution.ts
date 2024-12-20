import { Pathfinder } from 'abstract-pathfinder'

export const answers = [
  ['1389', '1005068'], // real
  ['10', '285'],
]

//
//
const dirs = [
  [-1, 0], // N
  [0, 1], // E
  [1, 0], // S
  [0, -1], // W
]

const countSkips = (input: string, skipTime = 1, cutoff = 10) => {
  const map = input.split('\n').map((s) => s.trim().split(''))
  const [si, sj] = [map.length, map[0].length]
  const get = (i = 0, j = 0) => (map[i] && map[i][j]) || '#'

  const sposIx = input.indexOf('S')
  const eposIx = input.indexOf('E')
  const spos = [Math.floor(sposIx / (si + 1)), sposIx % (si + 1)]
  const epos = [Math.floor(eposIx / (si + 1)), eposIx % (si + 1)]

  const finder = new Pathfinder<number[]>({
    nodeToPrimitive: (node) => node.join(','),
    getNeighbors: ([i, j]) => dirs.map(([di, dj]) => [i + di, j + dj]),
    getMoveCost: (_, [i, j]) => (get(i, j) === '#' ? -1 : 1),
    getHeuristic: (a, b) => {
      return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    },
  })
  const path = finder.findPath(spos, epos)
  const times = new Map<number, number>()
  const key = (i = 0, j = 0) => {
    if (i < 0 || j < 0 || i >= si || j >= sj) return -1
    return i * sj + j
  }
  path.forEach(([i, j], k) => times.set(key(i, j), k))

  const offsets: number[][] = []
  for (let di = -skipTime; di <= skipTime; di++) {
    for (let dj = -skipTime; dj <= skipTime; dj++) {
      const dist = Math.abs(di) + Math.abs(dj)
      if (dist <= skipTime) offsets.push([di, dj, dist])
    }
  }

  let skips = 0
  path.forEach(([i, j]) => {
    const t = times.get(key(i, j)) || 0
    offsets.forEach(([di, dj, dist]) => {
      const k = key(i + di, j + dj)
      if (!times.has(k)) return
      const save = (times.get(k) || 0) - t - dist
      if (save >= cutoff) skips++
    })
  })
  return skips
}

export const part1 = (input = '') => countSkips(input, 2, input.length < 1000 ? 10 : 100)
export const part2 = (input = '') => countSkips(input, 20, input.length < 1000 ? 50 : 100)
