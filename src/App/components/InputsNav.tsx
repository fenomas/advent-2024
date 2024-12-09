import { day, inputNum, inputs, runCurrentSolution, setInputNum } from '../state'
import { ToggleButton } from './ToggleButton'

//

export const InputsNav = () => {
  const buts = () =>
    inputs()
      .filter((input) => input.day === day())
      .map((input, i) => ({
        label: input.name,
        isToggled: i === inputNum(),
        onClick: () => {
          setInputNum(i)
          runCurrentSolution()
        },
        classes: { 'input-toggle': true },
      }))

  return (
    <div class="label" style="align-self: flex-start;">
      <h4>Input:</h4>
      <br />
      {buts().map((but) => (
        <ToggleButton {...but} />
      ))}
    </div>
  )
}
