import { PROFILE, EDUCATION } from "../../data/portfolio";
import { useInView } from "../../hooks/useCounter";

export const About = () => {
    const [ref] = useInView({ threshold: 0.2 });
    return (
        <section
            id="about"
            data-testid="about-section"
            ref={ref}
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 space-y-3">
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige">
                        / 01 — About
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                        Statistics, models, and the stories they tell.
                    </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                    {PROFILE.about.map((p, i) => (
                        <p
                            key={i}
                            data-testid={`about-paragraph-${i}`}
                            className="text-base md:text-lg leading-relaxed text-brown dark:text-beige/90"
                        >
                            {p}
                        </p>
                    ))}

                    <div className="pt-12">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige mb-6">
                            Education
                        </div>
                        <div className="space-y-8 relative pl-6 border-l border-brown/20 dark:border-beige/20">
                            {EDUCATION.map((ed, i) => (
                                <div
                                    key={i}
                                    data-testid={`education-item-${i}`}
                                    className="relative"
                                >
                                    <span className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-ink dark:bg-ivory" />
                                    <div className="font-mono text-xs text-brown dark:text-beige">
                                        {ed.period}
                                    </div>
                                    <h3 className="font-display text-lg md:text-xl font-bold mt-1">
                                        {ed.school}
                                    </h3>
                                    <p className="text-sm md:text-base text-brown dark:text-beige/90 mt-1">
                                        {ed.degree}
                                    </p>
                                    <p className="font-mono text-xs mt-1 text-ink dark:text-ivory">
                                        {ed.score}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
