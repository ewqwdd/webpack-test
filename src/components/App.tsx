import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, useContext } from "react";
import { MainAsync } from "./Main/Main.async";
import "../styles/index.scss"
import { Theme, ThemeContext } from "./Theme/ThemeContext";
import { classNames } from "../helpers/classname";

export default function App() {

    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className={classNames('app', {"hovered": true}, [theme])}>
        <button onClick={()=>{
            setTheme(theme == Theme.dark ? Theme.light : Theme.dark)
        }}>
            Theme
        </button>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path={"/"} element={<MainAsync />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

//<MainAsync />
