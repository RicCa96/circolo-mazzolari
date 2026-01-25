import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

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
        <header className="sticky top-0 z-50 bg-blue-50 backdrop-blur">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-bold tracking-tight text-primary flex items-center">
                        <Image src="./anspi.svg" alt="Logo ANSPI" width={100} height={350} className="mr-2" priority={true}/>
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
                                className="rounded-full px-3 py-2 text-xs text-neutral-800 font-bold hover:bg-primary/10 whitespace-nowrap"
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
