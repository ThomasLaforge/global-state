import { useState } from "react";

export default function Frere(props: { prenom: string, updatePrenom: (prenom: string) => void}){
    const [prenomForm, setPrenomForm] = useState(props.prenom)

    const handleChangePrenomForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrenomForm(event.target.value)
    }

    const handleUpdateFamille = () => {
        props.updatePrenom(prenomForm)
    }

    return (
        <div>
        <h1>Frère : {props.prenom} </h1>
        <input type="text" value={prenomForm} onChange={handleChangePrenomForm} />
        <button onClick={handleUpdateFamille}>Changer le prénom</button>
        </div>
    );
}