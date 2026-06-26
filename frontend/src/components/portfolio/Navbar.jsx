import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = ({ isDark, onToggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            data-testid="main-nav"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-ivory/80 dark:bg-ink/80 border-b border-brown/10 dark:border-beige/10"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                <a
                    href="#hero"
                    data-testid="nav-logo"
                    className="font-display text-lg md:text-xl font-bold tracking-tighter"
                >
                    Mahi<span className="text-brown dark:text-beige">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            data-testid={`nav-link-${item.label.toLowerCase()}`}
                            className="text-sm font-medium text-brown dark:text-beige hover:text-ink dark:hover:text-ivory transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink dark:bg-ivory group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        data-testid="mobile-nav-toggle"
                        className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-sm border border-brown/30 dark:border-beige/30"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {open && (
                <div
                    data-testid="mobile-nav-menu"
                    className="md:hidden border-t border-brown/10 dark:border-beige/10 bg-ivory/95 dark:bg-ink/95 backdrop-blur-xl"
                >
                    <div className="px-6 py-4 flex flex-col gap-3">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                                className="text-sm font-medium py-2 text-brown dark:text-beige"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
