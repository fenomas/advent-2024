export const answers = [
  ['1437174', '1437468'], // real
  ['10092', '9021'],
]

//
//

const dirs = {
  '^': [-1, 0],
  v: [1, 0], //     prettier strikes again!
  '<': [0, -1],
  '>': [0, 1],
} as Record<string, [number, number]>

export const part1 = (input = '') => {
  const [map, moves] = input.split('\n\n')
  const spos = map.indexOf('@')
  const lines = map.split('\n').map((line) => line.split(''))
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'
  const set = (i = 0, j = 0, value = '') => lines[i] && (lines[i][j] = value)

  const si = lines[0].length + 1
  const pos = [Math.floor(spos / si), spos % si]

  moves.split('').forEach((char) => {
    const move = dirs[char] || ''
    if (!move) return
    let [i, j] = pos
    while (true) {
      i += move[0]
      j += move[1]
      const ch = get(i, j)
      if (ch === '#') return
      if (ch === '.') break
    }

    set(pos[0], pos[1], '.')
    pos[0] += move[0]
    pos[1] += move[1]
    set(pos[0], pos[1], '@')

    while (pos[0] !== i || pos[1] !== j) {
      set(i, j, 'O')
      i -= move[0]
      j -= move[1]
    }
  })

  let total = 0
  lines.forEach((line, i) => {
    line.forEach((cell, j) => {
      if (cell === 'O') total += 100 * i + j
    })
  })
  return total
}

//

export const part2 = (input = '') => {
  const mapTransform = {
    '#': '##',
    O: '[]',
    '.': '..',
    '@': '@.',
  } as Record<string, string>

  const [map, moves] = input.split('\n\n')
  const spos = map.indexOf('@')
  const lines = map.split('\n').map((line) => {
    return line
      .split('')
      .map((char) => mapTransform[char])
      .join('')
      .split('')
  })
  const get = (i = 0, j = 0) => (lines[i] && lines[i][j]) || '-'
  const set = (i = 0, j = 0, value = '') => lines[i] && (lines[i][j] = value)

  const sj = lines[0].length / 2 + 1
  const pos = [Math.floor(spos / sj), 2 * (spos % sj)]

  moves.split('').forEach((char) => {
    const move = dirs[char] || ''
    if (!move) return
    const [di, dj] = move
    const [pi, pj] = pos
    const vert = dj === 0

    const toMove = [[pi, pj]]
    for (const [i, j] of toMove) {
      const [mi, mj] = [i + di, j + dj]
      const ch = get(mi, mj)
      if (ch === '#') return
      if (ch === '.') continue
      toMove.push([mi, mj])
      if (vert) {
        if (ch === '[') toMove.push([mi, mj + 1])
        if (ch === ']') toMove.push([mi, mj - 1])
      }
    }

    const deduped = toMove.filter(
      (a, i) => toMove.findIndex((b) => a[0] === b[0] && a[1] === b[1]) === i
    )

    for (let i = deduped.length - 1; i >= 0; i--) {
      const [mi, mj] = deduped[i]
      const ch = get(mi, mj)
      set(mi + di, mj + dj, ch)
      set(mi, mj, '.')
    }
    pos[0] += di
    pos[1] += dj
  })

  let total = 0
  lines.forEach((line, i) => {
    line.forEach((cell, j) => {
      if (cell === '[') total += 100 * i + j // wtf? directions clearly contradict this
    })
  })
  return total
}
