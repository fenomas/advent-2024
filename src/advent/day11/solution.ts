export const answers = [
  ['222461', '264350935776416'], // real
  ['55312', '65601038650482'],
]

//
//

const impl = (input = '', iter = 1) => {
  const xform = (num: string) => {
    if (num === '0') return ['1', '']
    if (num.length % 2) {
      return [String(+num * 2024), '']
    } else {
      const a = num.slice(0, num.length / 2)
      const b = num.slice(num.length / 2)
      return [+a, +b].map(String)
    }
  }

  const xform_cache = new Map<string, string[]>()
  const xform_memo = (num: string) => {
    if (xform_cache.has(num)) xform_cache.get(num)
    const res = xform(num)
    xform_cache.set(num, res)
    return res
  }

  let nums = new Map<string, number>()
  input.split(/ +/).forEach((num) => {
    nums.set(num, (nums.get(num) || 0) + 1)
  })

  for (let i = 0; i < iter; i++) {
    const next = new Map<string, number>()
    nums.entries().forEach(([numStr, count]) => {
      const [a, b] = xform_memo(numStr)
      next.set(a, (next.get(a) || 0) + count)
      if (b) next.set(b, (next.get(b) || 0) + count)
    })
    nums = next
  }

  return nums.values().reduce((a, b) => a + b, 0)
}

export const part1 = (input = '') => impl(input, 25)
export const part2 = (input = '') => impl(input, 75)
