import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import InputName from "./Components/InputName";
import Characters from "./Components/Characters";
import CharactersDetails from "./Components/CharactersDetails";
import ProtectecRoutes from "./Components/ProtectecRoutes";
import Config from "./Components/Config";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InputName />} />
        <Route element={<ProtectecRoutes />}>
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharactersDetails />} />
          <Route path="/config" element={<Config />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
