import { useContext } from "react";
import Pere from "./Pere";
import { FamilyContext } from "../App";

export default function GrandPere() {
    const { prenom } = useContext(FamilyContext)

    return (
        <div>
        <h1>Grand-père : {prenom }</h1>
        <Pere />
        </div>
    );
}