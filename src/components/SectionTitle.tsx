export default function SectionTitle({
                                         kicker,
                                         title,
                                         subtitle,
                                         className
                                     }: {
    kicker?: string;
    title: string;
    subtitle?: string;
    className?: string;
}) {
    return (
        <div className={`max-w-2xl ${className || ""}`}>
            {kicker ? (
                <div className="text-xs font-bold uppercase tracking-widest text-primary/70">{kicker}</div>
            ) : null}
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl">{title}</h2>
            {subtitle ? <p className="mt-4 text-neutral-500 text-lg leading-relaxed">{subtitle}</p> : null}
        </div>
    );
}
