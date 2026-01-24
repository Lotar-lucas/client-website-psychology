import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import HowToHelp from "./components/howToHelp";
import Process from "./components/process";
import "./App.css";
import { useState } from "react";

function App() {
  const [headerHeight, setHeaderHeight] = useState(88);

  return (
    <div className="flex flex-col scroll-smooth">
      <Header onHeightChange={setHeaderHeight} />
      <main className="flex-1">
        <Home headerHeight={headerHeight} />
        <About />
        <HowToHelp />
        <Process />
      </main>
    </div>
  );
}

export default App;
