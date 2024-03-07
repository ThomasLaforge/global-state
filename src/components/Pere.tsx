import { useContext } from "react";
import Frere from "./Frere";
import { FamilyContext } from "../App";

export default function Pere() {
    const prenomP = useContext(FamilyContext).prenom
    return (
        <div>
            <h1>Père : {prenomP} </h1>
            <Frere />
        </div>
    );
}