import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 py-10 dark:border-neutral-800 dark:bg-neutral-900">
            <Container>
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <div className="font-bold text-primary text-lg">Circolo ANSPI Mazzolari</div>
                        <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-100">
                            Associazione sportiva dilettantistica APS ETS<br/>
                            Vezzano sul Crostolo (RE).<br/>
                            Affiliato ANSPI (Associazione Nazionale San Paolo Italia)<br/>
                            Ente del Terzo Settore iscritto al RUNTS
                        </p>
                    </div>

                    <div>
                        <div className="font-bold text-neutral-900 dark:text-white">Contatti</div>
                        <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-100">
                            Email: vezzano@anspi.re.it<br/>
                            PEC: mazzolari.03184@anspipec.it<br/>
                            Sede: Via XI Febbraio, 2 - 42030 Vezzano sul Crostolo (RE)
                        </p>
                    </div>

                    <div>
                        <div className="font-bold text-neutral-900 dark:text-white">Seguici</div>
                        <div className="mt-2 flex flex-col gap-1 text-sm text-neutral-900 dark:text-neutral-100">
                            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                            <a href="#" className="hover:text-primary transition-colors">YouTube</a>
                            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-xs text-neutral-700 dark:text-neutral-400">
                    © {new Date().getFullYear()} Circolo ANSPI Don Primo Mazzolari — Tutti i diritti riservati.
                </div>
            </Container>
        </footer>
    );
}
