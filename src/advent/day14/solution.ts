export const answers = [
  ['221655456', '7858'], // real
  ['12', '-1'],
]

//
//

export const part1 = (input = '') => {
  const [sx, sy] = input.length > 500 ? [101, 103] : [11, 7]
  const dt = 100
  const quads = [0, 0, 0, 0]
  const mod = (a: number, b: number) => ((a % b) + b) % b

  input.split('\n').forEach((line) => {
    const [a, b] = line.split(' ').map((s) => s.split('=')[1])
    const [x, y] = a.split(',').map(Number)
    const [vx, vy] = b.split(',').map(Number)
    const [x2, y2] = [mod(x + vx * dt, sx), mod(y + vy * dt, sy)]
    if (x2 === (sx - 1) / 2) return
    if (y2 === (sy - 1) / 2) return
    const ix = x2 < sx / 2 ? 0 : 1
    const iy = y2 < sy / 2 ? 0 : 2
    quads[ix + iy]++
  })

  return quads.reduce((a, b) => a * b, 1)
}

//

const LOG = false

export const part2 = (input = '') => {
  const [sx, sy] = input.length > 100 ? [101, 103] : [11, 7]
  const mod = (a: number, b: number) => ((a % b) + b) % b

  const bots = input.split('\n').map((line) => {
    const [a, b] = line.split(' ').map((s) => s.split('=')[1])
    const pos = a.split(',').map(Number)
    const vel = b.split(',').map(Number)
    return { pos, vel }
  })

  const log = (dt: number) => {
    const txt = Array.from({ length: sy }, () => {
      return Array.from({ length: sx }, () => 0)
    })
    bots.forEach(({ pos, vel }) => {
      const x = mod(pos[0] + vel[0] * dt, sx)
      const y = mod(pos[1] + vel[1] * dt, sy)
      txt[y][x]++
    })
    const s = (n = 0) => '.123456789'[n]
    console.clear()
    console.log(txt.map((a) => a.map(s).join('')).join('\n'))
  }

  let dt0 = -1
  let period = 100
  for (let dt = 0; dt < 1e4; dt++) {
    let ct = 0
    bots.forEach(({ pos, vel }) => {
      const y = mod(pos[1] + vel[1] * dt, sy)
      if (y == 44 || y === 76) ct++
    })
    if (ct < 50) continue
    if (dt0 < 0) {
      dt0 = dt
    } else {
      period = dt - dt0
      break
    }
  }

  for (let dt = dt0; dt < 1e5; dt += period) {
    const seen = new Set()
    bots.forEach(({ pos, vel }) => {
      const y = mod(pos[1] + vel[1] * dt, sy)
      const x = mod(pos[0] + vel[0] * dt, sx)
      if (x < 35 || x > 65) return
      if (y === 44) seen.add(x)
    })

    if (seen.size < 20) continue
    if (LOG) log(dt)
    return dt
  }
  return -1
}
