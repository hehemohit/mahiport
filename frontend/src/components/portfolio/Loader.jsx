import { useEffect, useState } from "react";

export const Loader = ({ onDone }) => {
    const [count, setCount] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const start = performance.now();
        const dur = 1100;
        let raf;
        const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            setCount(Math.round(t * 100));
            if (t < 1) {
                raf = requestAnimationFrame(tick);
            } else {
                setFading(true);
                setTimeout(() => onDone && onDone(), 450);
            }
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [onDone]);

    return (
        <div
            data-testid="page-loader"
            className={`fixed inset-0 z-[100] flex items-end justify-between p-8 md:p-12 bg-ivory dark:bg-ink transition-opacity duration-500 ${
                fading ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige">
                Mahi Vinod Soni — Portfolio
            </div>
            <div className="font-display font-light text-[20vw] md:text-[14rem] leading-none tracking-tighter text-ink dark:text-ivory">
                {String(count).padStart(3, "0")}
            </div>
        </div>
    );
};
