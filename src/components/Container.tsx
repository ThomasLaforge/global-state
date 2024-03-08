import { useDarkThemeStore } from "../App";
import Card from "./Card";

export default function Container() {
    const isDarkTheme = useDarkThemeStore().darkTheme

    return (
        <div
            className="container"
        >
            <Card />
        </div>
    );
}