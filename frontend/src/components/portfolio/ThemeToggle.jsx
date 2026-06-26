import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({ isDark, onToggle }) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            data-testid="theme-toggle-button"
            aria-label="Toggle theme"
            className="relative inline-flex h-9 w-16 items-center rounded-full border border-brown/30 dark:border-beige/30 bg-beige/40 dark:bg-brown/40 transition-colors duration-300"
        >
            <span
                className={`absolute top-1 left-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-ivory dark:bg-ivory dark:text-ink shadow-sm transform transition-transform duration-300 ${
                    isDark ? "translate-x-7" : "translate-x-0"
                }`}
            >
                {isDark ? <Moon size={14} /> : <Sun size={14} />}
            </span>
        </button>
    );
};
