import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { PROFILE } from "../../data/portfolio";

export const Hero = ({ isDark }) => {
    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
        >
            <ParticleField isDark={isDark} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center">
                {/* Left: Text */}
                <div className="lg:col-span-7 space-y-8">
                    <div
                        data-testid="hero-tagline-pill"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brown/25 dark:border-beige/25 bg-beige/40 dark:bg-brown/20 backdrop-blur-sm"
                    >
                        <Sparkles size={12} className="text-brown dark:text-beige" />
                        <span className="text-xs font-mono uppercase tracking-widest text-brown dark:text-beige">
                            {PROFILE.tagline}
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1
                            data-testid="hero-name"
                            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[0.95]"
                        >
                            {PROFILE.name.split(" ").map((w, i) => (
                                <span
                                    key={i}
                                    className="inline-block opacity-0 animate-fade-up"
                                    style={{ animationDelay: `${i * 0.12}s` }}
                                >
                                    {w}&nbsp;
                                </span>
                            ))}
                        </h1>
                        <p
                            data-testid="hero-title"
                            className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-brown dark:text-beige"
                        >
                            {PROFILE.title}
                        </p>
                    </div>

                    <p
                        data-testid="hero-intro"
                        className="text-base md:text-lg max-w-2xl leading-relaxed text-brown dark:text-beige/90"
                    >
                        {PROFILE.intro}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a
                            href="#projects"
                            data-testid="hero-cta-projects"
                            className="group inline-flex items-center gap-2 bg-ink text-ivory dark:bg-ivory dark:text-ink px-7 py-3.5 text-sm font-medium hover:translate-y-[-2px] transition-all duration-300 shadow-sm"
                        >
                            View Projects
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href={PROFILE.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            download
                            data-testid="hero-cta-resume"
                            className="inline-flex items-center gap-2 border border-brown dark:border-beige text-ink dark:text-ivory px-7 py-3.5 text-sm font-medium hover:bg-brown hover:text-ivory dark:hover:bg-beige dark:hover:text-ink transition-all duration-300"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            data-testid="hero-cta-contact"
                            className="inline-flex items-center gap-2 text-ink dark:text-ivory px-4 py-3.5 text-sm font-medium underline-offset-4 hover:underline"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center gap-5 pt-4">
                        <a
                            href={PROFILE.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="hero-social-linkedin"
                            className="text-brown dark:text-beige hover:text-ink dark:hover:text-ivory transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        {PROFILE.socials.github && (
                            <a
                                href={PROFILE.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="hero-social-github"
                                className="text-brown dark:text-beige hover:text-ink dark:hover:text-ivory transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        <a
                            href={PROFILE.socials.email}
                            data-testid="hero-social-email"
                            className="text-brown dark:text-beige hover:text-ink dark:hover:text-ivory transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Right: Headshot */}
                <div className="lg:col-span-5 relative">
                    <div
                        data-testid="hero-headshot-card"
                        className="relative aspect-[4/5] w-full max-w-md mx-auto"
                    >
                        <div className="absolute -inset-4 border border-brown/20 dark:border-beige/20" />
                        <div className="absolute inset-0 bg-beige dark:bg-brown/30 overflow-hidden">
                            <div className="relative h-full w-full overflow-hidden noise-overlay">
                                <img
                                    src={PROFILE.headshot}
                                    alt={PROFILE.name}
                                    data-testid="hero-headshot-image"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    loading="eager"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/80">
                                        / portrait
                                    </div>
                                    <div className="font-display text-xl text-ivory">
                                        Mahi Vinod Soni
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating data tag */}
                        <div
                            className="absolute -bottom-6 -left-6 bg-ink text-ivory dark:bg-ivory dark:text-ink px-4 py-3 shadow-lg"
                            data-testid="hero-floating-tag"
                        >
                            <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                                Status
                            </div>
                            <div className="font-display text-sm font-medium">
                                Open to opportunities
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 hidden md:block bg-beige dark:bg-brown/40 border border-brown/20 dark:border-beige/20 px-4 py-3">
                            <div className="font-mono text-[10px] uppercase tracking-widest text-brown dark:text-beige">
                                Based in
                            </div>
                            <div className="font-display text-sm font-medium text-ink dark:text-ivory">
                                Mumbai, IN
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brown dark:text-beige">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
                <div className="h-10 w-px bg-brown/30 dark:bg-beige/30 relative overflow-hidden">
                    <span className="absolute top-0 left-0 right-0 h-1/2 bg-ink dark:bg-ivory animate-[fade-up_1.6s_ease-in-out_infinite]" />
                </div>
            </div>
        </section>
    );
};
