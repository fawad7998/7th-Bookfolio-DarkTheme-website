import { useState, useEffect } from 'react';

function Theme() {
    const [theme, setTheme] = useState("lighttheme");
    const mode = () => {
        theme === 'darktheme' ? setTheme("lighttheme") : setTheme("darktheme")
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div>
            <h1 style={{ textAlign: "center", paddingTop: "30px" }}>AJ Styles</h1>

            {theme === 'darktheme' ?
                <button onClick={mode}>Enable DarkTheme</button> :
                <button onClick={mode}>Enable lightTheme</button>}
            <div>
                <h1 className="heading">Bookfolio</h1>
            </div>
            <div className="images" style={{ display: "flex" }}>
                <img src="day.jpg" alt="" style={{ width: "300px", borderRadius: "8px", height: "400px", margin: "10px" }} />
                <img src="real.jpeg" alt="" style={{ width: "300px", borderRadius: "8px", height: "400px", margin: "10px" }} />
                <img src="topten.webp" alt="" style={{ width: "300px", borderRadius: "8px", height: "400px", margin: "10px" }} />
            </div>
        </div>
    )
}

export default Theme;