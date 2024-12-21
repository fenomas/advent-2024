export const answers = [
  ['184180', '231309103124520'], // real
  ['126384', '154115708116294'],
]

//
//

const map1 = '789456123-0A'
const map2 = '-^A<v>'
const loc = (map: string, char: string) => {
  const ix = map.indexOf(char)
  return [Math.floor(ix / 3), ix % 3]
}
const expand = (map: string, a: string, b: string) => {
  if (a === b) return 'A'
  const [ai, aj] = loc(map, a)
  const [bi, bj] = loc(map, b)
  const [di, dj] = [bi - ai, bj - aj]
  const si = (di > 0 ? 'v' : '^').repeat(Math.abs(di))
  const sj = (dj > 0 ? '>' : '<').repeat(Math.abs(dj))
  if (di === 0) return sj + 'A'
  if (dj === 0) return si + 'A'
  if (map[ai * 3 + aj + dj] === '-') return si + sj + 'A'
  if (map[(ai + di) * 3 + aj] === '-') return sj + si + 'A'
  return dj < 0 ? sj + si + 'A' : si + sj + 'A'
}

//

const cache = new Map<string, number>()
const countExpanded = (a: string, b: string, level: number, initial = false) => {
  const k = `${a},${b},${level}`
  if (!cache.has(k)) cache.set(k, countExpanded_impl(a, b, level, initial))
  return cache.get(k) || 0
}
const countExpanded_impl = (a: string, b: string, level: number, initial = false) => {
  const code = expand(initial ? map1 : map2, a, b)
  if (level === 1) return code.length
  let len = 0
  code.split('').forEach((char, i) => {
    len += countExpanded(code[i - 1] || 'A', char, level - 1)
  })
  return len
}

//

export const part1 = (input = '', robots = 2) => {
  let total = 0
  input.split(/ *\n */).forEach((line) => {
    let len = 0
    line.split('').forEach((char, i) => {
      len += countExpanded(line[i - 1] || 'A', char, robots + 1, true)
    })
    total += len * parseInt(line.trim())
  })
  return total
}

export const part2 = (input = '') => part1(input, 25)
