import { SKILLS } from "../../data/portfolio";

export const Skills = () => {
    return (
        <section
            id="skills"
            data-testid="skills-section"
            className="relative py-24 md:py-32 bg-beige/40 dark:bg-brown/10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-12 mb-14">
                    <div className="lg:col-span-5 space-y-3">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige">
                            / 04 — Toolkit
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                            A stack tuned for analytics & AI.
                        </h2>
                    </div>
                    <div className="lg:col-span-7 flex items-end">
                        <p className="text-base md:text-lg text-brown dark:text-beige/90 max-w-2xl">
                            From statistical foundations to large language model
                            orchestration — chosen to balance rigor, speed, and clarity.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((s, gi) => (
                        <div
                            key={s.group}
                            data-testid={`skill-group-${gi}`}
                            className="border border-brown/15 dark:border-beige/15 bg-ivory dark:bg-ink p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                        >
                            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brown dark:text-beige mb-4">
                                {`0${gi + 1}`} — {s.group}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {s.items.map((it) => (
                                    <span
                                        key={it}
                                        data-testid={`skill-${it.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="inline-flex items-center px-3 py-1.5 border border-brown/25 dark:border-beige/25 text-xs font-mono text-ink dark:text-ivory hover:bg-ink hover:text-ivory dark:hover:bg-ivory dark:hover:text-ink transition-all duration-300 cursor-default"
                                    >
                                        {it}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
