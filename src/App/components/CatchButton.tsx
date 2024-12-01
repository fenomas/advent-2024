import { catchErrors, setCatchErrors } from '../state'
import { ToggleButton } from './ToggleButton'

//

export const CatchButton = () => {
  return (
    <div class="catch-area">
      Catch errors
      <ToggleButton
        label="x"
        classes={{ 'input-toggle': true, 'catch-button': true }}
        isToggled={catchErrors()}
        onClick={() => setCatchErrors((v) => !v)}
      />
    </div>
  )
}
