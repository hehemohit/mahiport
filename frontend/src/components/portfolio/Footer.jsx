export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="border-t border-brown/15 dark:border-beige/15 bg-ivory dark:bg-ink"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-display text-sm text-ink dark:text-ivory">
                    Designed and Developed by{" "}
                    <span className="font-bold">Mahi Soni</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brown dark:text-beige">
                    © {new Date().getFullYear()} — From Numbers to Narratives
                </div>
            </div>
        </footer>
    );
};
