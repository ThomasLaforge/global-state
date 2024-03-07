import Pere from "./Pere";

export default function GrandPere(props: { prenomGP: string, updatePrenom: (prenom: string) => void}) {
    return (
        <div>
        <h1>Grand-père : {props.prenomGP }</h1>
        <Pere prenomP={props.prenomGP} updatePrenom={props.updatePrenom}/>
        </div>
    );
}