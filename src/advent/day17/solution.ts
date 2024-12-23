export const answers = [
  ['7,1,5,2,4,0,7,6,1', '37222273957364'], // real
  ['4,6,3,5,6,3,5,2,1,0', '0'],
  ['5,7,3,0', '117440'],
]

//
//

export const evalProg = (prog: string[], aval: number) => {
  let a = BigInt(aval)
  let b = BigInt(0)
  let c = BigInt(0)

  const literal = (op: string) => BigInt(+op)
  const combo = (op: string) => {
    if (op === '4') return a
    if (op === '5') return b
    if (op === '6') return c
    return BigInt(+op)
  }
  const div = (op = '') => a / BigInt(2) ** combo(op)

  const impls = {
    '0': (op = '') => (a = div(op)),
    '1': (op = '') => (b = b ^ literal(op)),
    '2': (op = '') => (b = combo(op) % BigInt(8)),
    '3': (op = '') => a !== BigInt(0) && (ix = Number(literal(op))),
    '4': () => (b = b ^ c),
    '5': (op = '') => output.push(Number(combo(op)) % 8),
    '6': (op = '') => (b = div(op)),
    '7': (op = '') => (c = div(op)),
  } as Record<string, (op: string) => unknown>

  let ix = 0
  const output = [] as number[]
  while (true) {
    if (ix >= prog.length) return output
    const inst = prog[ix]
    const op = prog[ix + 1]
    ix += 2
    impls[inst](op)
  }
}

export const part1 = (input = '') => {
  const [as, , , , progstr] = input.split('\n')
  const prog = progstr.split(': ')[1].split(',')
  const a = +as.split(': ')[1]
  return evalProg(prog, a).join(',')
}

export const part2 = (input = '') => {
  const prog = input.split('\n')[4].split(': ')[1].split(',')
  const nums = prog.map(Number)
  let answer = 0

  for (let i = 0; i < nums.length; i++) {
    const tgt = nums.slice(nums.length - i - 1).join('')
    for (let j = 0; j < 1e3; j++) {
      const num = answer * 8 + j
      if (tgt === evalProg(prog, num).join('')) {
        answer = num
        break
      }
    }
  }
  return answer
}
