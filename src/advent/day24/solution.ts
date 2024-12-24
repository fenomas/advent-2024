export const answers = [
  ['43559017878162', 'fhc,ggt,hqk,mwh,qhj,z06,z11,z35'], // real
  ['2024', '-'],
]

//
//

const applyGate = (l = 0, r = 0, op = '') => {
  if (op === 'AND') return l & r
  if (op === 'OR') return l | r
  if (op === 'XOR') return l ^ r
  throw '?'
}
const pad = (n = 0) => String(n).padStart(2, '0')

const parse = (input: string) => {
  const [a, b] = input.split('\n\n')
  const vals = new Map<string, number>()
  const rules = new Map<string, string[]>()
  a.split('\n').forEach((line) => {
    const [a, b] = line.split(': ')
    vals.set(a, Number(b))
  })
  b.split('\n').forEach((line) => {
    const [a, tgt] = line.split(/ *-> */)
    const [l, op, r] = a.split(/ +/)
    rules.set(tgt, [l, op, r])
  })
  return { vals, rules }
}

//
//

export const part1 = (input = '') => {
  const { vals, rules } = parse(input)
  const solve = (tgt: string) => {
    if (vals.has(tgt)) return vals.get(tgt) || 0
    if (!rules.has(tgt)) return 0
    const [l, op, r] = rules.get(tgt) || []
    const res = applyGate(solve(l), solve(r), op)
    vals.set(tgt, res)
    return res
  }
  let res = 0
  for (let i = 0; i < 50; i++) {
    if (solve('z' + pad(i))) res += 2 ** i
  }
  return res
}

export const part2 = (input = '') => {
  if (input.length < 1000) return '-'

  const { rules } = parse(input)
  const swaps = []

  // which rules apply AND or XOR to input bits
  const ones = ['']
  rules.entries().forEach(([tgt, [l, op, r]]) => {
    const heads = [l[0], r[0]].sort().join('')
    if (heads === 'xy') {
      if (l.slice(1) !== r.slice(1)) throw '? aaa'
      const n = parseInt(l.slice(1))
      if (op === 'OR') throw '? bbb'
      if (op === 'XOR') ones[n] = tgt
    }
  })

  // impossible non-XOR mappings to output bits
  for (let i = 1; i < 45; i++) {
    const tgt = 'z' + pad(i)
    const [, op] = rules.get(tgt) || []
    if (op === 'XOR') continue

    let replacement = ''
    for (const [tgt, [l, op, r]] of rules) {
      if ((l === ones[i] || r === ones[i]) && op === 'XOR') replacement = tgt
    }
    if (!replacement) throw '? ccc'
    swaps.push([tgt, replacement])
  }

  const applySwap = (a = '', b = '') => {
    const [av, bv] = [rules.get(a), rules.get(b)]
    rules.set(a, bv || [])
    rules.set(b, av || [])
  }
  swaps.forEach(([a, b]) => applySwap(a, b))

  // no idea if this generalizes or not
  for (let i = 2; i < 45; i++) {
    const tgt = 'z' + pad(i)
    const [l, op, r] = rules.get(tgt) || []
    if (op !== 'XOR') continue

    const [, op1] = rules.get(l) || []
    const [, op2] = rules.get(r) || []
    if ([op1, op2].sort().join(',') === 'OR,XOR') continue

    const rep = op1 === 'OR' ? r : l
    swaps.push([rep, ones[i]])
  }

  return swaps.flat().sort().join(',')
}
