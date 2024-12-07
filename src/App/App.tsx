/* @refresh reload */

import { PartOutput } from './components/PartOutput'
import { InputsNav } from './components/InputsNav'
import { DayButtons } from './components/DayButtons'
import { InputArea } from './components/InputArea'
import { createAllEffects } from './state'
import { CatchButton } from './components/CatchButton'
import { RunAllButton } from './components/RunAllButton'

//

export const App = () => {
  createAllEffects()

  return (
    <main>
      <header>
        <h2>Advent 2024</h2>
      </header>
      <article class="layout">
        {/* Day buttons */}
        <div class="label">
          <h4>Days:</h4>
        </div>
        <div>
          <DayButtons />
          <br />
          <RunAllButton />
        </div>

        {/* Part outputs */}
        <PartOutput part={1} />
        <PartOutput part={2} />

        {/* Inputs */}
        <InputsNav />
        <InputArea />

        {/* catch button */}
        <div />
        <CatchButton />
      </article>
    </main>
  )
}
