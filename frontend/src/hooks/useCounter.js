import { useEffect, useRef, useState } from "react";

export const useCounter = (target, duration = 1500, start = false) => {
    const [value, setValue] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!start) return;
        const startTs = performance.now();
        const tick = (now) => {
            const elapsed = now - startTs;
            const t = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(target * eased);
            if (t < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [target, duration, start]);

    return value;
};

export const useInView = (options = { threshold: 0.3 }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    // Destructure the specific values so they can safely be used in the dependency array
    const threshold = options.threshold;
    const root = options.root;
    const rootMargin = options.rootMargin;

    useEffect(() => {
        if (!ref.current) return;
        
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                obs.disconnect();
            }
        }, { threshold, root, rootMargin }); // Use primitive values here

        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold, root, rootMargin]); // Safe array dependencies

    return [ref, inView];
};