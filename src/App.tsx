import { useState } from 'react'
import './App.css'
import ArriereGrandPere from './components/ArriereGrandPere'

function App() {
  const [prenomPremierFils, setPrenomPremierFils] = useState("Jason")

  return (
    <>
      <ArriereGrandPere prenomARGP={prenomPremierFils} updatePrenom={setPrenomPremierFils} />
    </>
  )
}

export default App
