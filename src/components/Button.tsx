import { useDarkThemeStore } from "../App";

export default function Button() {
    const { darkTheme, switchTheme } = useDarkThemeStore()
    return (
        <button
                style={{
                    backgroundColor: darkTheme ? 'black' : 'white',
                    color: darkTheme ? 'white' : 'black',
                }} 
                onClick={switchTheme}
            >Change Theme</button>
    );
}