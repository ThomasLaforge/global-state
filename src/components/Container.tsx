import { useDarkThemeStore } from "../App";
import Card from "./Card";

export default function Container() {
    const isDarkTheme = useDarkThemeStore().darkTheme

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isDarkTheme ? 'black' : 'white',
            color: isDarkTheme ? 'white' : 'black',
        }}>
            <Card />
        </div>
    );
}