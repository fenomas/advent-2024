import { createEffect, createSignal } from 'solid-js'

/**
 *
 *
 *    Import parsers
 */

const pathToDay = (path: string) => {
  return parseInt(path.split('day')[1] || '1')
}

const parseOneInputModule = (path: string, raw: string) => {
  const name = (path.match(/input-?(.+)\.md$/) || [])[1] || 'Real'
  const day = pathToDay(path)
  return { day, name, raw }
}

type Solution = (input: string) => string
interface SolutionMod {
  part1?: Solution
  part2?: Solution
  answers?: [string, string][]
}
const parseOneSolutionModule = (path: string, mod: SolutionMod) => {
  const hasSolution = !!(mod.part1 || mod.part2)
  const part1 = mod['part1'] || (() => '-')
  const part2 = mod['part2'] || (() => '-')
  const answers = mod['answers'] || [['', '']]
  const day = pathToDay(path)
  return { day, part1, part2, answers, hasSolution }
}

/**
 *
 *
 *    App state
 */

type inputData = ReturnType<typeof parseOneInputModule>
export type solutionData = ReturnType<typeof parseOneSolutionModule>

export const [inputs, setInputs] = createSignal<inputData[]>([])
export const [solutions, setSolutions] = createSignal<solutionData[]>([])

export const [day, setDay] = createSignal(1)
export const [inputNum, setInputNum] = createSignal(0)

export const [inputStr, setInputStr] = createSignal('')

export const [output1, setOutput1] = createSignal({ value: '', time: 0, knownGood: false })
export const [output2, setOutput2] = createSignal({ value: '', time: 0, knownGood: false })

export const [busy, setBusy] = createSignal(false)
export const [catchErrors, setCatchErrors] = createSignal(true)

// helpers
export const setOutput = (part: 1 | 2, value = '', time = 0, knownGood = false) => {
  if (part === 1) setOutput1({ value, time, knownGood })
  if (part === 2) setOutput2({ value, time, knownGood })
}
export const clearOutputs = () => [setOutput(1), setOutput(2)]

// derived for today
export const todaysInputs = () => inputs().filter((input) => input.day === day())
export const todaysSolution = () => solutions().find((soln) => soln.day === day())

/**
 *
 *
 *    Updates / reactivity
 */

export const createAllEffects = () => {
  // input text update from manual input or day/inputNum changes
  createEffect(() => {
    if (inputNum() >= todaysInputs().length) return setInputNum(todaysInputs().length - 1)
    const input = todaysInputs()[inputNum()]
    const soln = todaysSolution()
    if (!input || !soln) return clearOutputs()
    setInputStr(input.raw)
  })

  // main update bit
  createEffect(() => {
    const soln = todaysSolution()
    const input = inputStr()
    if (!soln || !input) return clearOutputs()
    const answers = soln.answers[inputNum()] || ['', '']

    // run solutions in timeout so that UI library doesn't catch errors
    setTimeout(runSolution, 0, 1, soln.part1, input, answers[0])
    setTimeout(runSolution, 5, 2, soln.part2, input, answers[1])
  })
}

const runSolution = async (part: 1 | 2, sol: Solution, input: string, answer: string) => {
  if (busy()) return
  setBusy(true)
  const { output, dt } = await runOneSolution(sol, input, catchErrors())
  setOutput(part, output, dt, output === answer)
  setBusy(false)
}

const runOneSolution = async (solFn: Solution, input: string, shouldCatch: boolean) => {
  const t = performance.now()
  const output = (() => {
    if (!shouldCatch) return String(solFn(input))
    try {
      return String(solFn(input))
    } catch (err) {
      return `Error: ${err}`
    }
  })()
  return { output, dt: performance.now() - t }
}

export const runAllSolutions = async () => {
  if (busy()) return
  setBusy(true)
  clearOutputs()

  const outs = ['', '']
  const dts = [0, 0]
  const oks = [true, true]
  for (let i = 0; i < solutions().length; i++) {
    const sol = solutions()[i]
    const input = inputs().filter((input) => input.day === i + 1)[0].raw

    for (let part = 0; part < 2; part++) {
      const { output, dt } = await runOneSolution(part === 0 ? sol.part1 : sol.part2, input, true)
      dts[part] += dt
      const ok = output === sol.answers[0][part]
      oks[part] &&= ok
      outs[part] += ok ? '★' : '-'
      setOutput((part + 1) as 1 | 2, outs[part], dts[part], oks[part])
    }
  }

  setBusy(false)
}

/**
 *
 *
 *    HMR for solution/input modules
 */

import * as imported from './importer'

const onModuleImport = (mods: typeof imported) => {
  setInputs(
    Object.keys(mods.inputMods)
      .map((path) => parseOneInputModule(path, mods.inputMods[path] as string))
      .sort((a, b) => a.name.localeCompare(b.name))
  )
  setSolutions(
    Object.keys(mods.solutionMods)
      .map((path) => parseOneSolutionModule(path, mods.solutionMods[path] as SolutionMod))
      .filter((soln) => soln.hasSolution)
      .sort((a, b) => a.day - b.day)
  )
}

if (import.meta.hot) {
  import.meta.hot.accept('./importer', (mod) => onModuleImport(mod as unknown as typeof imported))
}

// app init
onModuleImport(imported)
setDay(solutions().at(-1)?.day || 1)
