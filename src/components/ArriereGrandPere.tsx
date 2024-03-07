import GrandPere from "./GrandPere";

export default function ArriereGrandPere(props: { prenomARGP: string, updatePrenom: (prenom: string) => void}) {
  return (
    <div>
      <h1>Arrière grand-père: {props.prenomARGP}</h1>
      <GrandPere prenomGP={props.prenomARGP} updatePrenom={props.updatePrenom}/>
    </div>
  );
}