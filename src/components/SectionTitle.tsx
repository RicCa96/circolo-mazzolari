export default function SectionTitle({
                                         kicker,
                                         title,
                                         subtitle,
                                     }: {
    kicker?: string;
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="max-w-2xl">
            {kicker ? (
                <div className="text-xs font-bold uppercase tracking-widest text-secondary-600 dark:text-secondary">{kicker}</div>
            ) : null}
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-white">{title}</h2>
            {subtitle ? <p className="mt-4 text-neutral-900 text-lg leading-relaxed dark:text-neutral-100">{subtitle}</p> : null}
        </div>
    );
}
