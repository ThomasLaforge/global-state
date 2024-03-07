import Frere from "./Frere";
import { useFamilyStore } from "../App";

export default function Pere() {
    const prenomP = useFamilyStore().prenom
    return (
        <div>
            <h1>Père : {prenomP} </h1>
            <Frere />
        </div>
    );
}