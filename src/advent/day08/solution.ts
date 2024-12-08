export const answers = [
  ['249', '905'], // real
  ['14', '34'],
]

//
//

type Loc = [number, number]

const parse = (input: string) => {
  const nodes = new Map()
  let [si, sj] = [0, 0]

  input.split('\n').forEach((line, i) => {
    line
      .trim()
      .split('')
      .forEach((char, j) => {
        si = Math.max(si, i + 1)
        sj = Math.max(sj, j + 1)
        if (char === '.') return
        if (!nodes.has(char)) nodes.set(char, [])
        nodes.get(char).push([i, j])
      })
  })
  return { nodes, si, sj }
}

export const part1 = (input = '') => {
  const { nodes, si, sj } = parse(input)

  const antinodes = new Set()
  const maybeAdd = (i1 = 0, j1 = 0, i2 = 0, j2 = 0) => {
    const [di, dj] = [i2 - i1, j2 - j1]
    const [pi, pj] = [i1 - di, j1 - dj]
    if (pi < 0 || pi >= si || pj < 0 || pj >= sj) return
    antinodes.add(`${pi},${pj}`)
  }

  nodes.entries().forEach(([, locs]) => {
    locs.forEach(([i1, j1]: Loc, i = 0) => {
      locs.forEach(([i2, j2]: Loc, j = 0) => {
        if (i === j) return
        maybeAdd(i1, j1, i2, j2)
        maybeAdd(i2, j2, i1, j1)
      })
    })
  })
  return antinodes.size
}

export const part2 = (input = '') => {
  const { nodes, si, sj } = parse(input)

  const antinodes = new Set()
  const maybeAdd = (i1 = 0, j1 = 0, i2 = 0, j2 = 0, mult = 1) => {
    const [di, dj] = [i2 - i1, j2 - j1]
    for (let k = 1; ; k++) {
      const [pi, pj] = [i1 - di * mult * k, j1 - dj * mult * k]
      if (pi < 0 || pi >= si || pj < 0 || pj >= sj) return
      antinodes.add(`${pi},${pj}`)
    }
  }

  nodes.entries().forEach(([, locs]) => {
    locs.forEach(([i1, j1]: Loc, i = 0) => {
      locs.forEach(([i2, j2]: Loc, j = 0) => {
        if (i === j) return
        maybeAdd(i1, j1, i2, j2, 1)
        maybeAdd(i2, j2, i1, j1, 1)
        maybeAdd(i1, j1, i2, j2, -1)
        maybeAdd(i2, j2, i1, j1, -1)
      })
    })
  })
  return antinodes.size
}
