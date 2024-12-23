export const answers = [
  ['926', 'az,ed,hz,it,ld,nh,pc,td,ty,ux,wc,yg,zz'], // real
  ['7', 'co,de,ka,ta'],
]

//
//

const parse = (input: string) => {
  const data = new Map<string, string[]>()
  input.split('\n').forEach((line) => {
    const [a, b] = line.split('-').map((s) => s.trim())
    if (!data.has(a)) data.set(a, [])
    if (!data.has(b)) data.set(b, [])
    data.get(a)?.push(b)
    data.get(b)?.push(a)
  })
  return data
}

export const part1 = (input = '') => {
  const data = parse(input)
  const seen = new Set<string>()

  data.keys().forEach((key) => {
    if (!key.startsWith('t')) return
    data.get(key)?.forEach((key2) => {
      if (key2 === key) return
      data.get(key2)?.forEach((key3) => {
        if (key3 === key2 || key3 === key) return
        if (!data.get(key3)?.includes(key)) return
        seen.add([key, key2, key3].sort().join('-'))
      })
    })
  })

  return seen.size
}

export const part2 = (input = '') => {
  const data = parse(input)
  const seen = new Set<string>()
  let best = ['-']

  const check = (key: string, currList: string[]) => {
    const next =
      data.get(key)?.filter((k) => {
        return currList.every((c) => data.get(k)?.includes(c))
      }) || []
    if (currList.length + next.length < best.length) return
    next.forEach((k) => {
      if (seen.has(k)) return
      const newCurrList = [...currList, k]
      if (newCurrList.length > best.length) best = newCurrList
      check(k, newCurrList)
    })
    seen.add(key)
  }

  data.keys().forEach((key) => check(key, []))
  return best.sort().join(',')
}
