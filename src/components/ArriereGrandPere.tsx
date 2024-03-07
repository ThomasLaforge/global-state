import { useContext } from "react";
import GrandPere from "./GrandPere";
import { FamilyContext } from "../App";

export default function ArriereGrandPere() {
    const prenomARGP = useContext(FamilyContext).prenom
  return (
    <div>
      <h1>Arrière grand-père: {prenomARGP}</h1>
      <GrandPere />
    </div>
  );
}