import { EXPERIENCE } from "../../data/portfolio";
import { Briefcase } from "lucide-react";

export const Experience = () => {
    return (
        <section
            id="experience"
            data-testid="experience-section"
            className="relative py-24 md:py-32 bg-beige/40 dark:bg-brown/10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-12 mb-12">
                    <div className="lg:col-span-4 space-y-3">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige">
                            / 02 — Experience
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                            Where I&apos;ve built impact.
                        </h2>
                    </div>
                    <div className="lg:col-span-8 flex items-end">
                        <p className="text-base md:text-lg text-brown dark:text-beige/90 max-w-2xl">
                            From pharma forecasting to generative AI grading systems —
                            building production-grade ML and analytics tooling.
                        </p>
                    </div>
                </div>

                <div className="relative pl-8 md:pl-12 border-l border-brown/20 dark:border-beige/20 space-y-14">
                    {EXPERIENCE.map((exp, i) => (
                        <div
                            key={i}
                            data-testid={`experience-item-${i}`}
                            className="relative group"
                        >
                            <span className="absolute -left-[37px] md:-left-[49px] top-1 h-7 w-7 rounded-full bg-ivory dark:bg-ink border border-brown/30 dark:border-beige/30 flex items-center justify-center">
                                <Briefcase
                                    size={12}
                                    className="text-brown dark:text-beige"
                                />
                            </span>
                            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                                <div>
                                    <div className="font-mono text-xs uppercase tracking-widest text-brown dark:text-beige">
                                        {exp.period}
                                    </div>
                                    <h3 className="font-display text-2xl md:text-3xl font-bold mt-1 tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <p className="text-base md:text-lg text-ink/80 dark:text-ivory/80 mt-1">
                                        @ {exp.company}
                                    </p>
                                </div>
                            </div>
                            <ul className="mt-4 space-y-2.5 max-w-3xl">
                                {exp.bullets.map((b, j) => (
                                    <li
                                        key={j}
                                        className="text-sm md:text-base leading-relaxed text-brown dark:text-beige/90 flex gap-3"
                                    >
                                        <span className="text-ink dark:text-ivory mt-2 inline-block h-1 w-3 bg-ink dark:bg-ivory flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
