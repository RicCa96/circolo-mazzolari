import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

const eventi = [
    {
        date: "Sabato 15 Febbraio 2026",
        title: "Torneo di Calcetto Invernale",
        description: "Grande torneo per ragazzi e adulti. Iscrizioni aperte fino al 10 febbraio!",
    },
    {
        date: "Domenica 23 Febbraio 2026",
        title: "Festa di Carnevale",
        description: "Pomeriggio in maschera con giochi, musica e merenda per tutti. Ingresso libero.",
    },
    {
        date: "Sabato 8 Marzo 2026",
        title: "Gita al Parco Avventura",
        description: "Giornata all'aria aperta per famiglie e ragazzi. Prenotazione obbligatoria.",
    },
];

export default function HomePage() {
    return (
        <>
            <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20">
                <Container>
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            {/*<div*/}
                            {/*    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">*/}
                            {/*    Vezzano sul Crostolo (RE) • Comunità • Volontariato*/}
                            {/*</div>*/}
                            <Image src="./anspi.svg" alt="Logo ANSPI" width={200} height={70} className="mr-2" priority={true}/>

                            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl leading-[1.1]">
                                Benvenuti al Circolo ANSPI Don Primo Mazzolari
                            </h1>

                            <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
                                Crescere insieme attraverso lo sport, la cultura e l&apos;amicizia.
                                Siamo un&apos;Associazione di Promozione Sociale (APS) iscritta al RUNTS,
                                punto di riferimento per la comunità di Vezzano sul Crostolo.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/attivita"
                                    className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                                >
                                    Scopri le attività
                                </Link>
                                <Link
                                    href="/about"
                                    className="rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-all"
                                >
                                    Chi siamo
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-neutral p-8 text-white shadow-2xl relative overflow-hidden">
                            <div
                                className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16"/>
                            <div className="text-sm font-bold text-secondary uppercase tracking-widest">Prossimi
                                Eventi
                            </div>
                            <ul className="mt-6 space-y-4 relative z-10">
                                {eventi.map((e, i) => (
                                    <li key={i}
                                        className="rounded-2xl bg-neutral-400/5 p-5 border border-neutral-800/5 hover:border-secondary/50 transition-all hover:scale-[1.02] hover:bg-white/10">
                                        <div
                                            className="text-xs font-bold text-secondary uppercase tracking-wider">{e.date}</div>
                                        <div className="mt-1 font-bold text-neutral-600 text-lg">{e.title}</div>
                                        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{e.description}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 rounded-2xl bg-primary/20 border border-primary/20 p-5 hover:scale-[1.02]">
                                <div className="text-sm font-bold text-primary">Vuoi partecipare?</div>
                                <p className="mt-2 text-sm text-primary/70">
                                    Contattaci per dare una mano come volontario o per iscrivere i ragazzi alle
                                    attività.
                                </p>
                                <p className="mt-3 text-sm font-bold text-secondary">Email: <a
                                    href="mailto:vezzano@anspi.re.it">vezzano@anspi.re.it</a></p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
