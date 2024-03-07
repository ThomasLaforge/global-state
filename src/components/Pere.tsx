import Frere from "./Frere";

export default function Pere(props: { prenomP: string, updatePrenom: (prenom: string) => void}) {
    return (
        <div>
            <h1>Père : {props.prenomP} </h1>
            <Frere 
                prenom={props.prenomP} 
                updatePrenom={props.updatePrenom}
            />
        </div>
    );
}