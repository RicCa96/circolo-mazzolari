import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 py-10 dark:border-neutral-800 dark:bg-neutral-900">
            <Container>
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <div className="font-bold text-primary">Circolo ANSPI Mazzolari</div>
                        <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-100">
                            Vezzano sul Crostolo (RE). Iniziative sociali, educative e ricreative a servizio della
                            comunità.
                        </p>
                    </div>

                    <div>
                        <div className="font-bold text-neutral-900 dark:text-white">Contatti</div>
                        <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-100">
                            Email / telefono: <span className="text-neutral-900 dark:text-neutral-100">da inserire</span>
                            <br/>
                            Sede: <span className="text-neutral-900 dark:text-neutral-100">da inserire</span>
                        </p>
                    </div>

                    <div>
                        <div className="font-bold text-neutral-900 dark:text-white">Social</div>
                        <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-100">
                            Link Facebook/Instagram: <span className="text-neutral-900 dark:text-neutral-100">da inserire</span>
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-xs text-neutral-700 dark:text-neutral-400">
                    © {new Date().getFullYear()} Circolo ANSPI Don Primo Mazzolari — Tutti i diritti riservati.
                </div>
            </Container>
        </footer>
    );
}
