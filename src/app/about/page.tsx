import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <section className="py-14 border-b">
                <Container>
                    <SectionTitle
                        kicker="Chi siamo"
                        title="Circolo ANSPI Don Primo Mazzolari"
                        subtitle="Un'Associazione di Promozione Sociale (APS) iscritta al Registro Unico Nazionale del Terzo Settore (RUNTS) come Ente del Terzo Settore (ETS)."
                    />

                    <div className="mt-10 max-w-3xl mx-auto text-center">
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Siamo un punto di riferimento per la comunità di Vezzano sul Crostolo, dove bambini, ragazzi e famiglie
                            possono incontrarsi, crescere e condividere momenti di gioia. Affiliati all&apos;ANSPI
                            (Associazione Nazionale San Paolo Italia), operiamo secondo i valori cristiani di solidarietà,
                            accoglienza e formazione integrale della persona.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-14 bg-neutral-50 dark:bg-neutral-900/50 border-b">
                <Container>
                    <div className="grid gap-12 md:grid-cols-2 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">La Nostra Storia</h2>
                            <div className="space-y-6 text-neutral-600 leading-relaxed">
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Le Origini</h3>
                                    <p>
                                        Il Circolo ANSPI Don Primo Mazzolari nasce a Vezzano sul Crostolo con l&apos;obiettivo di creare
                                        uno spazio di aggregazione, crescita e formazione per bambini, ragazzi e famiglie del territorio.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Crescita e Sviluppo</h3>
                                    <p>
                                        Nel corso degli anni, il circolo si è evoluto e arricchito di nuove attività e iniziative,
                                        diventando un punto di riferimento importante per la comunità locale.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">L&apos;Affiliazione ANSPI</h3>
                                    <p>
                                        L&apos;affiliazione all&apos;ANSPI rappresenta per noi l&apos;adesione a una rete nazionale di oratori
                                        e circoli che condividono gli stessi valori di educazione cristiana, sport e aggregazione sociale.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-xl border border-neutral-100 dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="text-center mb-6">
                                <p className="italic text-neutral-500 text-lg">
                                    &quot;La carità è dare tutto, perdonare tutto, soffrire tutto&quot;
                                </p>
                                <p className="font-bold text-primary mt-2">Don Primo Mazzolari</p>
                            </div>

                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Don Primo Mazzolari</h2>
                            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                                <p>
                                    <strong>La Vita:</strong> Don Primo Mazzolari (1890-1959) è stato un sacerdote cattolico italiano, scrittore e parroco
                                    di Bozzolo (Mantova). Figura profetica della Chiesa italiana del Novecento.
                                </p>
                                <p>
                                    <strong>Il Parroco degli Ultimi:</strong> Dedicò la sua vita ai poveri, agli emarginati e a tutti coloro che la società
                                    tendeva ad escludere. La sua parrocchia divenne un luogo di accoglienza per tutti.
                                </p>
                                <p>
                                    <strong>Testimone di Pace:</strong> Significativo fu il suo impegno per la pace e la non violenza,
                                    espresso magistralmente nell&apos;opera &quot;Tu non uccidere&quot; (1955).
                                </p>
                                <p>
                                    <strong>Perché a Lui:</strong> Il nostro circolo porta il suo nome perché vogliamo ispirarci ai suoi
                                    valori di accoglienza, solidarietà e attenzione agli ultimi.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-14">
                <Container>
                    <div className="rounded-3xl bg-primary p-8 text-white shadow-xl dark:bg-primary/90">
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
                            <Link
                                href="/contatti"
                                className="rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                            >
                                Contattaci
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
