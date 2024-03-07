import { createContext, useState } from 'react'
import './App.css'
import ArriereGrandPere from './components/ArriereGrandPere'
import Pere from './components/Pere'

export const FamilyContext = createContext<{
  prenom: string,
  setPrenom: (prenom: string) => void,
}>({
  prenom: "",
  setPrenom: () => {},
})


function App() {
  const [prenomState, setPrenomState] = useState("Jean")

  return (
    <>
      <FamilyContext.Provider value={{prenom: prenomState, setPrenom: setPrenomState}}>
        <ArriereGrandPere />
      </FamilyContext.Provider>
    </>
  )
}

export default App
