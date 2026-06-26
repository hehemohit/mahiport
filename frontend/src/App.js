import { useEffect, useState } from "react";
import "@/App.css";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";
import { Achievements } from "./components/portfolio/Achievements";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { Loader } from "./components/portfolio/Loader";

function App() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") return false;
        const stored = localStorage.getItem("mahi-theme");
        if (stored) return stored === "dark";
        return false;
    });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("mahi-theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <div className="App font-sans bg-ivory text-ink dark:bg-ink dark:text-ivory transition-colors duration-500 min-h-screen">
            {!loaded && <Loader onDone={() => setLoaded(true)} />}
            <Navbar
                isDark={isDark}
                onToggleTheme={() => setIsDark((v) => !v)}
            />
            <main>
                <Hero isDark={isDark} />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
