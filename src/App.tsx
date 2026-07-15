import { useState } from 'react'
import type { AppPage, ChartMode, TargetType } from './types'
import { HomePage } from './pages/HomePage'
import { ModeSelectPage } from './pages/ModeSelectPage'
import { TargetSelectPage } from './pages/TargetSelectPage'
import { SingleOshiPage } from './pages/SingleOshiPage'
import { MultiOshiPage } from './pages/MultiOshiPage'
import './App.css'

function App() {
  const [page, setPage] = useState<AppPage>('home')
  const [mode, setMode] = useState<ChartMode | null>(null)
  const [target, setTarget] = useState<TargetType | null>(null)

  const goMode = () => setPage('mode')

  const selectMode = (nextMode: ChartMode) => {
    setMode(nextMode)
    setPage('target')
  }

  const selectTarget = (nextTarget: TargetType) => {
    setTarget(nextTarget)
    setPage('chart')
  }

  const switchMode = () => {
    setMode((prev) => {
      const next = prev === 'single' ? 'multi' : 'single'
      if (next === 'single') {
        setTarget((t) => (t === 'character_voice' ? 'character' : t))
      }
      return next
    })
  }

  const goBackFromChart = () => setPage('target')
  const goBackFromTarget = () => setPage('mode')
  const goBackFromMode = () => setPage('home')

  return (
    <div className="app">
      {page === 'home' && <HomePage onStart={goMode} />}
      {page === 'mode' && (
        <ModeSelectPage onSelectMode={selectMode} onBack={goBackFromMode} />
      )}
      {page === 'target' && mode && (
        <TargetSelectPage
          mode={mode}
          onSelectTarget={selectTarget}
          onBack={goBackFromTarget}
        />
      )}
      {page === 'chart' && mode && target && (
        mode === 'single' ? (
          <SingleOshiPage
            mode={mode}
            target={target}
            onBack={goBackFromChart}
            onSwitchMode={switchMode}
          />
        ) : (
          <MultiOshiPage
            mode={mode}
            target={target}
            onBack={goBackFromChart}
            onSwitchMode={switchMode}
          />
        )
      )}
    </div>
  )
}

export default App
