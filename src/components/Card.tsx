import { useDarkThemeStore } from "../App";
import Button from "./Button";

export default function Card() {
    return (
        <div className="card">
            <h1>Card</h1>
            <Button />
        </div>
    );
}