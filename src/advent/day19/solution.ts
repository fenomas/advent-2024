export const answers = [
  ['369', '761826581538190'], // real
  ['6', '16'],
]

//
//

const getCounts = (input: string) => {
  const [pstr, dstr] = input.split('\n\n')
  const patterns = pstr.split(', ').map((s) => s.trim())
  const designs = dstr.split('\n').map((s) => s.trim())

  const known = new Map([['', 1]])

  const count = (des = '') => {
    if (known.has(des)) return known.get(des) || 0
    let ct = 0
    for (const pat of patterns) {
      if (des.startsWith(pat)) ct += count(des.slice(pat.length))
    }
    known.set(des, ct)
    return ct
  }

  return designs.map(count)
}

export const part1 = (input = '') => getCounts(input).filter((ct) => ct > 0).length
export const part2 = (input = '') => getCounts(input).reduce((a, b) => a + b, 0)
