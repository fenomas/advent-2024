import { day, setDay, solutions } from '../state'
import { ToggleButton } from './ToggleButton'

//

export const DayButtons = () => {
  return solutions().map((solution) => (
    <ToggleButton
      label={solution.day.toString().padStart(2, '0')}
      isToggled={solution.day === day()}
      onClick={() => setDay(solution.day)}
    />
  ))
}
