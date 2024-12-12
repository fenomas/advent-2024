export const answers = [
  ['1550156', '946084'], // real
  ['140', '80'],
]

//
//

const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

export const part1 = (input = '') => {
  const lines = input.split('\n').map((line) => line.split(''))
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

  const marked = lines.map((line) => line.map(() => false))
  const search = (i = 0, j = 0, char = '', onHit: (i: number, j: number) => unknown) => {
    if (get(i, j) !== char) return
    if (marked[i][j]) return
    marked[i][j] = true
    onHit(i, j)
    dirs.forEach(([di, dj]) => search(i + di, j + dj, char, onHit))
  }

  const findPerimeter = (char: string, hits: number[][]) => {
    let perim = 0
    hits.forEach(([i, j]) => {
      dirs.forEach(([di, dj]) => {
        if (get(i + di, j + dj) !== char) perim++
      })
    })
    return perim
  }

  let total = 0
  lines.forEach((line, i) => {
    line.forEach((char, j) => {
      if (marked[i][j]) return
      const hits: number[][] = []
      search(i, j, char, (i, j) => hits.push([i, j]))
      const perim = findPerimeter(char, hits)
      total += perim * hits.length
    })
  })
  return total
}

//

export const part2 = (input = '') => {
  const lines = input.split('\n').map((line) => line.split(''))
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'

  const marked = lines.map((line) => line.map(() => false))
  const search = (i = 0, j = 0, char = '', onHit: (i: number, j: number) => unknown) => {
    if (get(i, j) !== char) return
    if (marked[i][j]) return
    marked[i][j] = true
    onHit(i, j)
    dirs.forEach(([di, dj]) => search(i + di, j + dj, char, onHit))
  }

  const countWalls = (char: string, hits: number[][]) => {
    let walls = 0
    const seen = new Set<string>()
    hits.sort(([i1, j1], [i2, j2]) => i1 - i2 || j1 - j2)
    hits.forEach(([i, j]) => {
      dirs.forEach(([di, dj], dx) => {
        if (get(i + di, j + dj) !== char) {
          const key = [dx, i, j].join(',')
          const n1 = [dx, i + dj, j + di].join(',')
          const n2 = [dx, i - dj, j - di].join(',')
          if (!seen.has(n1) && !seen.has(n2)) walls++
          seen.add(key)
        }
      })
    })
    return walls
  }

  let total = 0
  lines.forEach((line, i) => {
    line.forEach((char, j) => {
      if (marked[i][j]) return
      const hits: number[][] = []
      search(i, j, char, (i, j) => hits.push([i, j]))
      const walls = countWalls(char, hits)
      total += walls * hits.length
    })
  })
  return total
}
