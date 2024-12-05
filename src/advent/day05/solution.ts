export const answers = [
  ['5964', '4719'], // real
  ['143', '123'],
]

//
//

export const part1 = (input = '') => {
  const [rulePairs, data] = input.split('\n\n')

  const follows = new Map()
  rulePairs.split('\n').forEach((line) => {
    const [a, b] = line.split('|')
    if (!follows.has(a)) follows.set(a, [])
    follows.get(a).push(b)
  })

  let total = 0

  data.split('\n').forEach((line) => {
    const nums = line.split(',').reverse()
    const ng = new Set()
    const ok = nums.every((a) => {
      if (ng.has(a)) return false
      ;(follows.get(a) || []).forEach((b = '') => ng.add(b))
      return true
    })
    if (ok) total += +nums[nums.length >> 1]
  })

  return total
}

export const part2 = (input = '') => {
  const [rulePairs, data] = input.split('\n\n')

  const follows = new Map()
  rulePairs.split('\n').forEach((line) => {
    const [a, b] = line.split('|')
    if (!follows.has(a)) follows.set(a, [])
    follows.get(a).push(b)
  })

  let total = 0

  data.split('\n').forEach((line) => {
    const nums = line.split(',').reverse()
    for (let i = 0; i < 10000; i++) {
      const ng = new Set()
      const ok = nums.every((a, j) => {
        if (ng.has(a)) {
          ;[nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
          return false
        }
        ;(follows.get(a) || []).forEach((b = '') => ng.add(b))
        return true
      })
      if (ok && i === 0) return
      if (ok) break
    }
    total += +nums[nums.length >> 1]
  })

  return total
}
