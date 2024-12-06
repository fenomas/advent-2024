export const answers = [
  ['5964', '4719'], // real
  ['143', '123'],
]

//
//

export const part1 = (input = '') => part1_impl(input).total

export const part1_impl = (input = '') => {
  const [rulePairs, data] = input.split('\n\n')

  const follows = new Map()
  rulePairs.split('\n').forEach((line) => {
    const [a, b] = line.split('|')
    if (!follows.has(a)) follows.set(a, [])
    follows.get(a).push(b)
  })

  let total = 0
  const wrongSets = data
    .split('\n')
    .map((line) => line.split(',').reverse())
    .filter((nums) => {
      const ng = new Set()
      const ok = nums.every((a) => {
        if (ng.has(a)) return false
        ;(follows.get(a) || []).forEach((b = '') => ng.add(b))
        return true
      })
      if (ok) total += +nums[nums.length >> 1]
      return !ok
    })
  return { total, wrongSets, follows }
}

export const part2 = (input = '') => {
  const { wrongSets, follows } = part1_impl(input)

  return wrongSets.reduce((sum, nums) => {
    nums.sort((a, b) => {
      if (follows.has(a) && follows.get(a).includes(b)) return -1
      return 1
    })
    return sum + +nums[nums.length >> 1]
  }, 0)
}
