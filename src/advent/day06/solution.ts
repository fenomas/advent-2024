export const answers = [
  ['4789', '1304'], // real
  ['41', '6'],
]

//
//

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]

const part1_impl = (input = '') => {
  const lines = input.split('\n').map((line) => line.split(''))
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

  let start = [0, 0]
  lines.find((row, i) => row.find((char, j) => char === '^' && (start = [i, j])))

  const seen = new Set()
  const visited = []
  let dir = 0
  let [i, j] = start
  while (true) {
    const [di, dj] = dirs[dir]
    const x = i * lines.length + j
    if (!seen.has(x)) visited.push([i, j])
    seen.add(x)
    const next = get(i + di, j + dj)
    if (next === '-') break
    if (next === '#') {
      dir = (dir + 1) % 4
    } else {
      ;[i, j] = [i + di, j + dj]
    }
  }

  return { visited, lines, start }
}

export const part1 = (input = '') => part1_impl(input).visited.length

//

export const part2 = (input = '') => {
  const { visited, lines, start } = part1_impl(input)

  const barriersByAxis: number[][][] = [
    Array.from({ length: lines.length }, () => []),
    Array.from({ length: lines.length }, () => []),
  ]
  const addBarrier = (i: number, j: number) => {
    barriersByAxis[0][i].push(j)
    barriersByAxis[1][j].push(i)
  }
  const removeBarrier = (i: number, j: number) => {
    barriersByAxis[0][i] = barriersByAxis[0][i].filter((x) => x !== j)
    barriersByAxis[1][j] = barriersByAxis[1][j].filter((x) => x !== i)
  }
  const getDistToBarrier = (i: number, j: number, dir: number) => {
    const [di, dj] = dirs[dir]
    const axis = di ? 1 : 0
    const [x, y] = axis === 0 ? [i, j] : [j, i]
    const barriers = barriersByAxis[axis][x]
    const step = Math.sign(di || dj)
    const barrierY =
      step > 0
        ? barriers.reduce((acc, by) => (by > y && by < acc ? by : acc), Infinity)
        : barriers.reduce((acc, by) => (by < y && by > acc ? by : acc), -Infinity)
    return isFinite(barrierY) ? Math.abs(barrierY - y) - 1 : -1
  }

  lines.forEach((row, i) => {
    row.forEach((char, j) => {
      if (char === '#') addBarrier(i, j)
    })
  })

  const checkForLoop = () => {
    let [i, j] = start
    let dir = 0
    const seens = dirs.map(() => new Set())
    while (true) {
      const [di, dj] = dirs[dir]
      const seen = seens[dir]
      const x = i * lines.length + j
      if (seen.has(x)) return true
      seen.add(x)
      const dist = getDistToBarrier(i, j, dir)
      if (dist === -1) return false
      ;[i, j] = [i + di * dist, j + dj * dist]
      dir = (dir + 1) % 4
    }
  }

  let total = 0
  if (checkForLoop()) total++

  visited.shift() // starting loc
  visited.forEach(([i, j]) => {
    addBarrier(i, j)
    if (checkForLoop()) total++
    removeBarrier(i, j)
  })
  return total
}
