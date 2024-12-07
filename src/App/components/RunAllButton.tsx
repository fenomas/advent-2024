import { runAllSolutions } from '../state'
import { ToggleButton } from './ToggleButton'

//

export const RunAllButton = () => {
  return (
    <ToggleButton
      label="Run all"
      classes={{ 'input-toggle': false, 'run-all-button': true }}
      isToggled={false}
      onClick={() => runAllSolutions()}
    />
  )
}
