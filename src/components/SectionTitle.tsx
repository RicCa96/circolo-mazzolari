type HeadingLevel = "h1" | "h2" | "h3";

export default function SectionTitle({
                                         kicker,
                                         title,
                                         subtitle,
                                         className,
                                         as = "h1",
                                     }: {
    kicker?: string;
    title: string;
    subtitle?: string;
    className?: string;
    as?: HeadingLevel;
}) {
    const Heading = as;
    return (
        <div className={`max-w-2xl ${className || ""}`}>
            {kicker ? (
                <div className="text-xs font-bold uppercase tracking-widest text-primary/70" aria-hidden="true">{kicker}</div>
            ) : null}
            <Heading className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl">
                {kicker ? <span className="sr-only">{kicker}: </span> : null}
                {title}
            </Heading>
            {subtitle ? <p className="mt-4 text-neutral-500 text-lg leading-relaxed">{subtitle}</p> : null}
        </div>
    );
}
