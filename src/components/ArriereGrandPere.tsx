import { useFamilyStore } from "../App";
import GrandPere from "./GrandPere";

export default function ArriereGrandPere() {
    const prenomARGP = useFamilyStore().prenom
  return (
    <div>
      <h1>Arrière grand-père: {prenomARGP}</h1>
      <GrandPere />
    </div>
  );
}