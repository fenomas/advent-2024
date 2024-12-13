export const answers = [
  ['29023', '96787395375634'], // real
  ['480', '875318608908'],
]

//
//

export const part1 = (input = '', add = 0) => {
  let total = 0

  input.split('\n\n').forEach((lines) => {
    const [a, b, c] = lines.split(/\n/).map((s) => s.split(':')[1])
    const [ax, ay] = a.split(',').map((s) => Number(s.split('+')[1]))
    const [bx, by] = b.split(',').map((s) => Number(s.split('+')[1]))
    const [cx, cy] = c.split(',').map((s) => Number(s.split('=')[1]) + add)

    // vec from origin along a: y = mx + b
    const [ma, ba] = [ay / ax, 0]
    // vec along b ending at [cx,cy]
    const [mb, bb] = [by / bx, cy - (cx * by) / bx]

    // x pos on both vectors
    const x = (bb - ba) / (ma - mb)
    const na = x / ax
    const nb = (cx - x) / bx
    if (Math.abs(na - Math.round(na)) > 0.0001) return

    total += na * 3 + nb
  })

  return total
}

export const part2 = (input = '') => part1(input, 10000000000000)
