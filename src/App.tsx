import { useEffect } from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Psychotherapy from "./components/psychotherapy";
import Process from "./components/process";
import Workshops from "./components/workshops";
import Footer from './components/footer';
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
      easing: "ease-out-cubic",
      startEvent: "load",
    });
    window.addEventListener("load", AOS.refresh);
    return () => window.removeEventListener("load", AOS.refresh);
  }, []);

  return (
    <div className="flex flex-col scroll-smooth overflow-x-hidden w-full">
      <Header />
      <main className="flex-1">
        <Home />
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
