import { useEffect, useRef } from "react";

// Lightweight canvas-based particle background (no external libs).
// Renders soft dots with connecting lines to evoke neural-network / data feel.
export const ParticleField = ({ isDark = false }) => {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let particles = [];
        let width = 0;
        let height = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const COLOR = isDark
            ? "rgba(232, 221, 208, "
            : "rgba(74, 63, 53, ";

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            const density = Math.max(40, Math.floor((width * height) / 16000));
            particles = Array.from({ length: density }).map(() => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 1.6 + 0.4,
            }));
        };

        const tick = () => {
            ctx.clearRect(0, 0, width, height);
            // draw lines
            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];
                a.x += a.vx;
                a.y += a.vy;
                if (a.x < 0 || a.x > width) a.vx *= -1;
                if (a.y < 0 || a.y > height) a.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.strokeStyle = COLOR + (0.12 * (1 - dist / 110)) + ")";
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
                ctx.fillStyle = COLOR + "0.55)";
                ctx.beginPath();
                ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
                ctx.fill();
            }
            animRef.current = requestAnimationFrame(tick);
        };

        resize();
        tick();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animRef.current);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            data-testid="hero-particle-canvas"
            className="absolute inset-0 h-full w-full pointer-events-none"
            aria-hidden="true"
        />
    );
};
