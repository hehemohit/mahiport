import { useMemo, useState } from "react";
import { PROJECTS } from "../../data/portfolio";
import { ArrowUpRight } from "lucide-react";

const FILTERS = ["All", "GenAI", "MLOps", "ML", "Analytics"];

export const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filtered = useMemo(
        () =>
            filter === "All"
                ? PROJECTS
                : PROJECTS.filter((p) => p.category === filter),
        [filter]
    );

    return (
        <section
            id="projects"
            data-testid="projects-section"
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-12 mb-12">
                    <div className="lg:col-span-6 space-y-3">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige">
                            / 03 — Selected Projects
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
                            Built end-to-end. Shipped to leaders.
                        </h2>
                    </div>
                    <div className="lg:col-span-6 flex flex-wrap gap-2 items-end justify-start lg:justify-end">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setFilter(f)}
                                data-testid={`project-filter-${f.toLowerCase()}`}
                                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${
                                    filter === f
                                        ? "bg-ink text-ivory dark:bg-ivory dark:text-ink border-ink dark:border-ivory"
                                        : "border-brown/30 dark:border-beige/30 text-brown dark:text-beige hover:bg-brown/10 dark:hover:bg-beige/10"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {filtered.map((p, idx) => {
                        const spanClasses = [
                            "md:col-span-8",
                            "md:col-span-4",
                            "md:col-span-4",
                            "md:col-span-4",
                            "md:col-span-12",
                        ];
                        const spanClass =
                            filtered.length === 1
                                ? "md:col-span-12"
                                : spanClasses[idx % spanClasses.length];
                        return (
                        <article
                            key={p.id}
                            data-testid={`project-card-${p.id}`}
                            className={`group relative overflow-hidden border border-brown/15 dark:border-beige/15 bg-beige/60 dark:bg-brown/15 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ${spanClass}`}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                                {p.accent && (
                                    <span className="absolute top-4 left-4 px-2 py-1 text-[10px] font-mono uppercase tracking-widest bg-ivory text-ink">
                                        {p.accent}
                                    </span>
                                )}
                                <span className="absolute top-4 right-4 px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-ivory/60 text-ivory backdrop-blur-sm">
                                    {p.category}
                                </span>
                            </div>

                            <div className="p-6 md:p-8 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-brown dark:text-beige">
                                            {p.subtitle}
                                        </div>
                                        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-1">
                                            {p.title}
                                        </h3>
                                    </div>
                                    <ArrowUpRight
                                        size={22}
                                        className="text-brown dark:text-beige group-hover:rotate-45 transition-transform duration-300 flex-shrink-0"
                                    />
                                </div>

                                <p className="text-sm md:text-base leading-relaxed text-brown dark:text-beige/90">
                                    {p.description}
                                </p>

                                <ul className="space-y-1.5 pt-1">
                                    {p.highlights.map((h, i) => (
                                        <li
                                            key={i}
                                            className="text-xs md:text-sm text-ink/80 dark:text-ivory/80 flex gap-2"
                                        >
                                            <span className="text-brown dark:text-beige">→</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-3">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="inline-flex items-center px-2.5 py-1 rounded-full border border-brown/25 dark:border-beige/25 text-[10px] font-mono text-brown dark:text-beige hover:bg-brown/10 dark:hover:bg-beige/10 transition-colors"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
