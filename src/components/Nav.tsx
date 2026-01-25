import Link from "next/link";
import Container from "./Container";

const links = [
    {href: "/", label: "Home"},
    {href: "/about", label: "Chi siamo"},
    {href: "/attivita", label: "Le nostre attività"},
];

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/90">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-bold tracking-tight text-primary">
                        Circolo ANSPI <span className="text-secondary">Don Primo Mazzolari</span>
                    </Link>

                    <nav className="flex items-center gap-2">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-full px-3 py-2 text-sm text-neutral-900 font-bold hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </Container>
        </header>
    );
}
