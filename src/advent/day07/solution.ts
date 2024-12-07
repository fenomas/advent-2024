export const answers = [
  ['1298103531759', '140575048428831'], // real
  ['3749', '11387'],
]

//
//

export const part1 = (input = '') => {
  const check = (acc = 0, nums = [0], ix = 0): boolean => {
    if (ix === 0) return acc === nums[0]
    if (acc < 0 || acc !== Math.floor(acc)) return false
    return check(acc - nums[ix], nums, ix - 1) || check(acc / nums[ix], nums, ix - 1)
  }

  return input.split('\n').reduce((total, line) => {
    const [res, b] = line.split(':').map((s) => s.trim())
    const nums = b.split(/ +/).map((n) => +n)
    const ok1 = check(+res, nums, nums.length - 1)
    return ok1 ? total + +res : total
  }, 0)
}

export const part2 = (input = '') => {
  const check = (acc = 0, nums = [0], ix = 0): boolean => {
    if (ix === 0) return acc === nums[0]
    if (acc < 0 || acc !== Math.floor(acc)) return false
    const [sacc, snum] = ['' + acc, '' + nums[ix]]
    if (sacc.endsWith(snum)) {
      if (check(+sacc.slice(0, -snum.length), nums, ix - 1)) return true
    }
    return check(acc - nums[ix], nums, ix - 1) || check(acc / nums[ix], nums, ix - 1)
  }

  return input.split('\n').reduce((total, line) => {
    const [res, b] = line.split(':').map((s) => s.trim())
    const nums = b.split(/ +/).map((n) => +n)
    const ok1 = check(+res, nums, nums.length - 1)
    return ok1 ? total + +res : total
  }, 0)
}
