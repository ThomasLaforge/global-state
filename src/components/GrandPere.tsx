import Pere from "./Pere";
import { useFamilyStore } from "../App";

export default function GrandPere() {
    const { prenom } = useFamilyStore()

    return (
        <div>
        <h1>Grand-père : {prenom }</h1>
        <Pere />
        </div>
    );
}