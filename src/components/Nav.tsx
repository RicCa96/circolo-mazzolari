import Link from "next/link";
import Container from "./Container";

const links = [
    {href: "/", label: "Home"},
    {href: "/about", label: "Chi siamo"},
    {href: "/attivita", label: "Attività"},
    {href: "/donazioni", label: "5x1000"},
    {href: "/trasparenza", label: "Trasparenza"},
    {href: "/contatti", label: "Contatti"},
];

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 bg-white backdrop-blur ">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-bold tracking-tight text-primary flex items-center">
                        <img src="./anspi.svg" alt="Logo ANSPI" className="w-52"/>
                        {/*<img src="./logo.png" alt="Logo Circolo Mazzolari" className="w-28"/>*/}
                        <div>
                            <p className="text-lg">Circolo Don Primo Mazzolari</p>
                            <p className="text-secondary text-sm">Associazione Sportiva Dilettantistica APS ETS</p>
                        </div>
                    </Link>

                    <nav className="flex items-center gap-2">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-full px-3 py-2 text-xs text-neutral-800 font-bold hover:bg-neutral-200 whitespace-nowrap"
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
