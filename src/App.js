import Home from './components/Home'
import React, {useState} from 'react';
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./themes.js";

const StyledApp = styled.div`

color: ${props => props.theme.fontColor};
`;

function App() {
    const [theme, setTheme] = useState("light");


    const themeToggler = () => {
        theme === 'light' ? setTheme("dark") : setTheme("light"); 
    }
    return(
        <ThemeProvider theme={theme === "light" ? lightTheme  : darkTheme}>
       <GlobalStyles/>
       <StyledApp>
       <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"  onClick={() => themeToggler()}>Change Theme</button>
        <div>
            <Home />
        </div>
        </StyledApp>
        </ThemeProvider>
      
    );
}

export default App;