import { inputStr, runCurrentSolution, setInputStr } from '../state'

//

const TextArea = (props: { value: string; onUpdate: (s: string) => void }) => {
  return (
    <textarea
      rows="14"
      value={props.value}
      onInput={(e) => {
        props.onUpdate(e.target.value)
        runCurrentSolution()
      }}
    />
  )
}

export const InputArea = () => {
  return <TextArea value={inputStr()} onUpdate={setInputStr} />
}
