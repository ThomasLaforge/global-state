import './App.css'
import ArriereGrandPere from './components/ArriereGrandPere'
import { create } from 'zustand'

interface FamilyState {
  prenom: string
  setPrenom: (newPrenom: string) => void
}

export const useFamilyStore = create<FamilyState>()((set) => ({
  prenom: "Thomas",
  setPrenom: (newPrenom) => set((state) => ({ prenom: newPrenom })),
}))

function App() {
  return (
    <>
      <ArriereGrandPere />
    </>
  )
}

export default App
