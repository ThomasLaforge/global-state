import { useDarkThemeStore } from "../App";

export default function Button() {
    const { darkTheme, switchTheme } = useDarkThemeStore()
    return (
        <button
            className={"button"} 
            onClick={switchTheme}
        >Change Theme</button>
    );
}