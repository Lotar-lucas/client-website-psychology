import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Psychotherapy from "./components/psychotherapy";
import Process from "./components/process";
import Workshops from "./components/workshops";
import Footer from './components/footer';
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
        <Psychotherapy />
        <Process />
        <Workshops />
      </main>
      <Footer />
    </div>
  );
}

export default App;
