import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 py-10">
            <Container>
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <div className="font-bold text-primary text-lg">Circolo Don Primo Mazzolari</div>
                        <p className="mt-2 text-sm text-neutral-900">
                            Associazione sportiva dilettantistica APS ETS<br/>
                            Vezzano sul Crostolo (RE).<br/>
                            Affiliato ANSPI (Associazione Nazionale San Paolo Italia)<br/>
                            Ente del Terzo Settore iscritto al RUNTS
                        </p>
                    </div>

                    <div>
                        <div className="font-bold text-neutral-900">Contatti</div>
                        <p className="mt-2 text-sm text-neutral-900">
                            Email: vezzano@anspi.re.it<br/>
                            PEC: mazzolari.03184@anspipec.it<br/>
                            Sede: Via XI Febbraio, 2 - 42030 Vezzano sul Crostolo (RE)
                        </p>
                    </div>

                </div>

                <div className="mt-8 text-xs text-neutral-700">
                    © {new Date().getFullYear()} Circolo ANSPI Don Primo Mazzolari — Tutti i diritti riservati.
                </div>
            </Container>
        </footer>
    );
}
