import { Download, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

const Row = ({ icon: Icon, label, value, href, testid, external = true }) => (
    <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        data-testid={testid}
        className="group flex items-center justify-between gap-4 py-5 border-b border-brown/15 dark:border-beige/15 hover:pl-2 transition-all duration-300"
    >
        <div className="flex items-center gap-4">
            <Icon size={18} className="text-brown dark:text-beige" />
            <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-brown dark:text-beige">
                    {label}
                </div>
                <div className="font-display text-base md:text-lg text-ink dark:text-ivory">
                    {value}
                </div>
            </div>
        </div>
        <ArrowUpRight
            size={18}
            className="text-brown dark:text-beige group-hover:rotate-45 transition-transform duration-300"
        />
    </a>
);

export const Contact = () => {
    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-32 bg-beige/40 dark:bg-brown/10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-6 space-y-6">
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-brown dark:text-beige">
                        / 06 — Get in touch
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
                        Let&apos;s build something meaningful with data.
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-brown dark:text-beige/90 max-w-lg">
                        Open to roles, collaborations, and conversations about machine
                        learning, generative AI, and applied analytics.
                    </p>
                    <a
                        href={PROFILE.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        download
                        data-testid="contact-resume-button"
                        className="inline-flex items-center gap-2 bg-ink text-ivory dark:bg-ivory dark:text-ink px-7 py-3.5 text-sm font-medium hover:-translate-y-1 transition-all duration-300"
                    >
                        <Download size={16} /> Download Resume
                    </a>
                </div>

                <div className="lg:col-span-6">
                    <div className="border-t border-brown/15 dark:border-beige/15">
                        <Row
                            icon={Mail}
                            label="Email"
                            value={PROFILE.socials.emailAddress}
                            href={PROFILE.socials.email}
                            testid="contact-email"
                            external={false}
                        />
                        <Row
                            icon={Linkedin}
                            label="LinkedIn"
                            value="/in/mahisoni"
                            href={PROFILE.socials.linkedin}
                            testid="contact-linkedin"
                        />
                        {PROFILE.socials.github && (
                            <Row
                                icon={Github}
                                label="GitHub"
                                value="github.com/mahisoni"
                                href={PROFILE.socials.github}
                                testid="contact-github"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
