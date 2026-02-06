import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function CookiePolicyPage() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <SectionTitle
                    kicker="Legale"
                    title="Informativa sui Cookie"
                    subtitle="Informazioni sull'utilizzo dei cookie su questo sito web."
                />

                <div className="mt-10 bg-white p-8 rounded-3xl border border-primary/10 shadow-lg space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Cosa sono i cookie</h3>
                        <p className="text-neutral-600">
                            I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Cookie tecnici (Necessari)</h3>
                        <p className="text-neutral-600">
                            Questo sito utilizza esclusivamente cookie tecnici necessari per il corretto funzionamento del sito, come quelli relativi alla memorizzazione del consenso all&apos;uso dei cookie stessi. Questi cookie non richiedono il consenso preventivo dell&apos;utente.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Cookie di terze parti</h3>
                        <p className="text-neutral-600">
                            Il sito potrebbe includere componenti di terze parti (come Google Maps o font esterni). Queste terze parti possono installare cookie propri per il funzionamento dei loro servizi.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Come gestire i cookie</h3>
                        <p className="text-neutral-600">
                            L&apos;utente può gestire le preferenze relative ai cookie direttamente all&apos;interno del proprio browser ed impedire — ad esempio — che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i cookie installati in passato.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
