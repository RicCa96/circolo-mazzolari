import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <SectionTitle
                        kicker="Legale"
                        title="Informativa sulla Privacy"
                        subtitle="Informazioni sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)."
                        className="md:mb-0"
                    />
                    <Link
                        href="/trattamento.pdf"
                        download="informativa_trattamento_dati_mazzolari.pdf"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-sm mb-8 md:mb-2"
                    >
                        📄 Scarica Informativa Completa (PDF)
                    </Link>
                </div>

                <div className="mt-10 bg-white p-8 rounded-3xl border border-primary/10 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-4">1. Titolare del Trattamento</h3>
                    <p className="text-neutral-600 mb-6">
                        Il Titolare del Trattamento è il <strong>Circolo ANSPI Don Primo Mazzolari ASD APS ETS</strong>, con sede in Via XI Febbraio, 2 - 42030 Vezzano sul Crostolo (RE).
                        Email: <a href="mailto:vezzano@anspi.re.it" className="text-primary hover:underline">vezzano@anspi.re.it</a>.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-4">2. Tipologia di Dati Raccolti</h3>
                    <p className="text-neutral-600 mb-4">
                        Attraverso questo sito web non vengono raccolti dati personali identificativi (come nome, cognome, email) a meno che l&apos;utente non decida volontariamente di inviarli tramite i canali di contatto indicati (email).
                    </p>
                    <p className="text-neutral-600 mb-6">
                        Vengono invece raccolti dati di navigazione tecnici necessari per il corretto funzionamento del sito e per l&apos;analisi statistica anonima.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-4">3. Finalità del Trattamento</h3>
                    <p className="text-neutral-600 mb-6">
                        I dati sono trattati esclusivamente per:
                    </p>
                    <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                        <li>Garantire il corretto funzionamento del sito web.</li>
                        <li>Rispondere a eventuali richieste inviate tramite email.</li>
                        <li>Adempiere ad obblighi di legge.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-primary mb-4">4. Base Giuridica</h3>
                    <p className="text-neutral-600 mb-6">
                        Il trattamento si basa sul legittimo interesse del titolare a fornire informazioni sulle proprie attività e sul consenso dell&apos;interessato per l&apos;invio di comunicazioni spontanee.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-4">5. Diritti dell&apos;Interessato</h3>
                    <p className="text-neutral-600 mb-6">
                        Ai sensi del GDPR, l&apos;utente ha il diritto di chiedere al titolare l&apos;accesso ai dati, la rettifica, la cancellazione degli stessi o la limitazione del trattamento. Le richieste possono essere inviate a <a href="mailto:vezzano@anspi.re.it" className="text-primary hover:underline">vezzano@anspi.re.it</a>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
