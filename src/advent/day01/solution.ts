//

export const answers = [
  ['1580061', '23046913'], // real
  ['11', '31'],
]

//
//
//

export const part1 = (input = '') => {
  const pairs = input.split('\n').map((line) => {
    const [a, b] = line.split(/\s+/).map((n) => parseInt(n))
    return [a, b]
  })
  const l = pairs.map(([a]) => a)
  const r = pairs.map(([, b]) => b)
  l.sort()
  r.sort()

  return l.reduce((acc, a, i) => {
    return acc + Math.abs(a - r[i])
  }, 0)
}

//
//
//

export const part2 = (input = '') => {
  const pairs = input.split('\n').map((line) => {
    const [a, b] = line.split(/\s+/).map((n) => parseInt(n))
    return [a, b]
  })
  const l = pairs.map(([a]) => a)
  const r = pairs.map(([, b]) => b)

  const cts = { ...[0] }
  r.forEach((n) => {
    cts[n] = (cts[n] || 0) + 1
  })

  return l.reduce((acc, a) => {
    return acc + a * (cts[a] || 0)
  }, 0)
}
