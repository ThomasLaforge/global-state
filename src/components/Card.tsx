import { useDarkThemeStore } from "../App";
import Button from "./Button";

export default function Card() {
    const isDarkTheme = useDarkThemeStore().darkTheme

    return (
        <div style={{
            backgroundColor: isDarkTheme ? 'white' : 'black',
            color: isDarkTheme ? 'black' : 'white',
            padding: '50px',
        }}>
            <h1>Card</h1>
            <Button />
        </div>
    );
}