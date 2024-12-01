import { output1, output2 } from '../state'

//

const getOutputRows = (str = '') => {
  const lines = str.split('\n').length
  return Math.min(lines, Math.max(lines, 1, 10))
}

export const PartOutput = ({ part = 1 }) => {
  const output = part === 1 ? output1 : output2
  return (
    <>
      <div class="label">
        <h4>Part {part}:</h4>
        <div class="time">({output().time.toFixed(0)}ms)</div>
      </div>

      <textarea
        class="output"
        disabled
        value={output().value}
        classList={{ 'correct-answer': output().knownGood }}
        rows={getOutputRows(output().value)}
      />
    </>
  )
}
