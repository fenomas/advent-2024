export const answers = [
  ['341', '404'], // real
  ['2', '4'],
]

//
//

export const part1 = (input = '') => {
  return input.split('\n').reduce((total, line) => {
    const nums = line.split(/ +/).map((s) => +s)
    const sign = (nums.at(-1) || 0) > nums[0] ? 1 : -1
    const ok = [1, 2, 3].map((n) => n * sign)

    const safe = nums.every((num, i, arr) => {
      if (i === 0) return true
      return ok.includes(num - arr[i - 1])
    })
    return safe ? total + 1 : total
  }, 0)
}

//

export const part2 = (input = '') => {
  const check = (nums: number[], ok: number[]) =>
    nums.every((num, i, arr) => {
      if (i === 0) return true
      return ok.includes(num - arr[i - 1])
    })

  return input.split('\n').reduce((total, line) => {
    const nums = line.split(/ +/).map((s) => +s)
    const sign = (nums.at(-1) || 0) > nums[0] ? 1 : -1
    const ok = [1, 2, 3].map((n) => n * sign)

    const safe =
      check(nums, ok) ||
      nums.find((num, i, arr) => {
        const copy = [...arr]
        copy.splice(i, 1)
        return check(copy, ok)
      })

    return safe ? total + 1 : total
  }, 0)
}
