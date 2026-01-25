import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function AboutPage() {
    return (
        <section className="py-14">
            <Container>
                <SectionTitle
                    kicker="Chi siamo"
                    title="Circolo ANSPI Don Primo Mazzolari"
                    subtitle="Un’associazione legata alla comunità parrocchiale di Vezzano sul Crostolo, impegnata da anni nella promozione sociale, educativa e ricreativa."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl bg-neutral-900 p-8 text-white shadow-xl transition-transform hover:scale-[1.02] dark:bg-neutral-800">
                        <div className="text-lg font-bold text-secondary">La nostra missione</div>
                        <p className="mt-4 text-neutral-100 leading-relaxed">
                            Creare occasioni di incontro e partecipazione, con iniziative per ragazzi, famiglie e
                            cittadini.
                            Lavoriamo in rete con la Parrocchia e con altre realtà del territorio.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-neutral-900 p-8 text-white shadow-xl transition-transform hover:scale-[1.02] dark:bg-neutral-800">
                        <div className="text-lg font-bold text-secondary">Cosa facciamo</div>
                        <ul className="mt-4 space-y-3 text-neutral-100">
                            {[
                                "Campeggi estivi (e invernali) a Vaglie",
                                "Sagra della Madonna della Neve",
                                "Attività sportive (volley)",
                                "Progetti educativi e supporto allo studio (prescuola)"
                            ].map(item => (
                                <li key={item} className="flex gap-3 items-start">
                                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-secondary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 rounded-3xl bg-primary p-8 text-white shadow-xl dark:bg-primary/90">
                    <div className="text-xl font-bold">Vuoi unirti o darci una mano?</div>
                    <p className="mt-3 text-blue-50 text-lg">
                        Siamo sempre felici di accogliere nuovi volontari e collaborazioni.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                            href="/attivita"
                            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-primary hover:bg-neutral-100 transition-colors"
                        >
                            Vai alle attività
                        </Link>
                        <a
                            href="#"
                            className="rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                        >
                            Contattaci
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
