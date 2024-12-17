export const answers = [
  ['85432', '465'], // real
  ['11048', '64'],
]

//
//

const dirs = [
  [-1, 0], // N
  [0, 1], // E
  [1, 0], // S
  [0, -1], // W
]

const parseAndFlood = (input = '') => {
  const sposIx = input.indexOf('S')
  const eposIx = input.indexOf('E')
  const lines = input.split('\n').map((line) => line.split(''))
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '#'

  const si = lines[0].length + 1
  const spos = [Math.floor(sposIx / si), sposIx % si]
  const epos = [Math.floor(eposIx / si), eposIx % si]

  const costs = new Map()
  const key = (i = 0, j = 0) => [i, j].join(',')
  const setCosts = (i = 0, j = 0, dir = 0, cost = 0) => {
    const k = key(i, j)
    const vals = dirs.map((_, ndir) => cost + [0, 1000, 2000, 1000][Math.abs(dir - ndir)])
    if (!costs.has(k)) return costs.set(k, vals)
    const nvals = costs.get(k).map((c = 0, i = 0) => Math.min(c, vals[i]))
    costs.set(k, nvals)
  }
  const isCostBetter = (i = 0, j = 0, dir = 0, cost = 0) => {
    if (!costs.has(key(i, j))) return true
    return cost < costs.get(key(i, j))[dir]
  }

  setCosts(...spos, 1, 0)
  const frontier = [spos]
  while (frontier.length) {
    const [i, j] = frontier.shift() || []
    const costHere = costs.get(key(i, j))

    dirs.forEach(([di, dj], ndir) => {
      const [ni, nj] = [i + di, j + dj]
      if (get(ni, nj) === '#') return
      const ncost = costHere[ndir] + 1
      if (isCostBetter(ni, nj, ndir, ncost)) {
        setCosts(ni, nj, ndir, ncost)
        frontier.push([ni, nj])
      }
    })
  }
  return { epos, costs, key }
}

//

export const part1 = (input = '') => {
  const { epos, costs } = parseAndFlood(input)
  return Math.min(...(costs.get(epos.join(',')) || Infinity))
}

export const part2 = (input = '') => {
  const { epos, costs, key } = parseAndFlood(input)
  const ecosts = costs.get(key(...epos))
  const ecost = Math.min(...ecosts)

  const frontier = []
  if (ecost === ecosts[0]) frontier.push([...epos, 0])
  if (ecost === ecosts[1]) frontier.push([...epos, 1])

  const seen = new Set()
  while (frontier.length) {
    const [i, j, dir] = frontier.pop() || []
    seen.add(key(i, j))

    const chere = costs.get(key(i, j))[dir]
    dirs.forEach(([di, dj], ndir) => {
      const [ni, nj] = [i - di, j - dj]
      const nc = costs.get(key(ni, nj))
      if (!nc) return
      const cdiff = 1 + [0, 1000, 2000, 1000][Math.abs(dir - ndir)]
      if (nc[ndir] === chere - cdiff) frontier.push([ni, nj, ndir])
    })
  }
  return seen.size
}
