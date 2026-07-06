import { useState } from 'react'
import type { AppPage } from './types'
import { HomePage } from './pages/HomePage'
import { SingleOshiPage } from './pages/SingleOshiPage'
import { MultiOshiPage } from './pages/MultiOshiPage'
import './App.css'

function App() {
  const [page, setPage] = useState<AppPage>('home')

  const goHome = () => setPage('home')
  const goSingle = () => setPage('single')
  const goMulti = () => setPage('multi')

  const switchMode = () => {
    setPage((p) => (p === 'single' ? 'multi' : 'single'))
  }

  return (
    <div className="app">
      {page === 'home' && (
        <HomePage onSelectSingle={goSingle} onSelectMulti={goMulti} />
      )}
      {page === 'single' && (
        <SingleOshiPage onBack={goHome} onSwitchMode={switchMode} />
      )}
      {page === 'multi' && (
        <MultiOshiPage onBack={goHome} onSwitchMode={switchMode} />
      )}
    </div>
  )
}

export default App
