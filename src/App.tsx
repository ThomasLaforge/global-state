import './App.scss'
import { create } from 'zustand'
import Container from './components/Container'

interface FamilyState {
  prenom: string
  setPrenom: (newPrenom: string) => void
}

export const useFamilyStore = create<FamilyState>()((set) => ({
  prenom: "thomas",
  setPrenom: (newPrenom: string) => set(() => ({ prenom: newPrenom })),
}))

interface DarkThemeState {
  darkTheme: boolean
  switchTheme: () => void
}

export const useDarkThemeStore = create<DarkThemeState>()((set) => ({
  darkTheme: false,
  switchTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
}))

function App() {
  const { darkTheme } = useDarkThemeStore()

  return (
    <div className={'App ' + (darkTheme ? 'dark' : '')} >
      <Container />
    </div>
  )
}

export default App
