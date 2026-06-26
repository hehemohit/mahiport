import { ACHIEVEMENTS, LEADERSHIP, CERTIFICATIONS } from "../../data/portfolio";
import { Trophy, Medal, Users, BadgeCheck } from "lucide-react";

const ICONS = {
    trophy: Trophy,
    medal: Medal,
};

export const Achievements = () => {
    return (
        <section
            id="achievements"
            data-testid="achievements-section"
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-12 mb-14">
                    <div className="lg:col-span-5 space-y-3">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige">
                            / 05 — Recognition
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                            Achievements, leadership & certifications.
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-6">
                    {/* Achievements */}
                    <div className="md:col-span-7 space-y-4">
                        {ACHIEVEMENTS.map((a, i) => {
                            const Icon = ICONS[a.icon] || Trophy;
                            return (
                                <div
                                    key={i}
                                    data-testid={`achievement-${i}`}
                                    className="flex gap-5 items-start p-6 border border-brown/15 dark:border-beige/15 bg-beige/40 dark:bg-brown/15 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="h-12 w-12 flex items-center justify-center bg-ink text-ivory dark:bg-ivory dark:text-ink flex-shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg md:text-xl font-bold tracking-tight">
                                            {a.title}
                                        </h3>
                                        <p className="font-mono text-xs mt-1 text-brown dark:text-beige">
                                            {a.meta}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Certifications */}
                        <div
                            data-testid="certifications-block"
                            className="p-6 border border-brown/15 dark:border-beige/15 bg-beige/40 dark:bg-brown/15"
                        >
                            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-brown dark:text-beige mb-3 flex items-center gap-2">
                                <BadgeCheck size={12} /> Certifications
                            </div>
                            {CERTIFICATIONS.map((c, i) => (
                                <div
                                    key={i}
                                    className="flex flex-wrap items-baseline justify-between gap-2 py-2"
                                >
                                    <span className="text-sm md:text-base text-ink dark:text-ivory">
                                        {c.title}
                                    </span>
                                    <span className="font-mono text-xs text-brown dark:text-beige">
                                        {c.issuer}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leadership */}
                    <div
                        data-testid="leadership-card"
                        className="md:col-span-5 p-8 border border-brown/15 dark:border-beige/15 bg-ink text-ivory dark:bg-ivory dark:text-ink relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 opacity-10">
                            <Users size={180} />
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 opacity-70">
                            Leadership
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tighter">
                            {LEADERSHIP.role}
                        </h3>
                        <p className="font-mono text-xs mt-1 opacity-80">
                            {LEADERSHIP.org}
                        </p>
                        <ul className="mt-6 space-y-3">
                            {LEADERSHIP.bullets.map((b, i) => (
                                <li key={i} className="flex gap-3 text-sm md:text-base">
                                    <span className="opacity-60 mt-2 inline-block h-1 w-3 bg-current flex-shrink-0" />
                                    <span className="opacity-90">{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
