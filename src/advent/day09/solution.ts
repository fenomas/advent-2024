export const answers = [
  ['6370402949053', '6398096697992'], // real
  ['1928', '2858'],
]

//
//

export const part1 = (input = '') => {
  const nums: number[] = []
  const gaps: number[] = []
  input
    .trim()
    .split('')
    .forEach((char, i) => (i % 2 ? gaps : nums).push(+char))

  let checkSum = 0,
    currNum = 0,
    lastIx = nums.length - 1,
    lastNum = nums.length - 1,
    pos = 0

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    while (num-- > 0) {
      checkSum += currNum * pos++
    }
    currNum++

    let gap = gaps[i] || 0
    while (gap-- > 0) {
      while (nums[lastIx] === 0) {
        lastIx--
        lastNum--
      }
      if (lastIx <= i) break
      checkSum += lastNum * pos
      pos++
      nums[lastIx]--
    }
  }

  return checkSum
}

//

export const part2 = (input = '') => {
  const nums: number[] = []
  const gaps: number[] = []
  input
    .trim()
    .split('')
    .forEach((char, i) => (i % 2 ? gaps : nums).push(+char))
  const numVals = nums.map((_, i) => i)

  for (let i = nums.length - 1; i > 0; i--) {
    const num = nums[i]
    if (num === 0) continue
    const numVal = numVals[i]

    let gapIx = 0
    for (; gapIx < i; gapIx++) {
      if (gaps[gapIx] >= num) break
    }
    if (gapIx >= i) continue

    gaps[gapIx] -= num
    nums[i] = 0
    numVals[i] = 0
    gaps[i] += num
    nums.splice(gapIx + 1, 0, num)
    numVals.splice(gapIx + 1, 0, numVal)
    gaps.splice(gapIx, 0, 0)
    i++
  }

  let checkSum = 0,
    pos = 0
  nums.forEach((num, i) => {
    while (num-- > 0) {
      checkSum += numVals[i] * pos
      pos++
    }
    pos += gaps[i]
  })
  return checkSum
}
