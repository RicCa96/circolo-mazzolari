import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 py-10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Piè di pagina</h2>
            <Container>
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-primary text-lg">Circolo Don Primo Mazzolari</h3>
                        <p className="mt-2 text-sm text-neutral-900">
                            Associazione sportiva dilettantistica APS ETS<br/>
                            Vezzano sul Crostolo (RE).<br/>
                            Affiliato ANSPI (Associazione Nazionale San Paolo Italia)<br/>
                            Ente del Terzo Settore iscritto al RUNTS
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-neutral-900">Contatti</h3>
                        <address className="mt-2 text-sm text-neutral-900 not-italic">
                            Email: <a href="mailto:vezzano@anspi.re.it" className="hover:underline">vezzano@anspi.re.it</a><br/>
                            PEC: <a href="mailto:mazzolari.03184@anspipec.it" className="hover:underline">mazzolari.03184@anspipec.it</a><br/>
                            Sede: Via XI Febbraio, 2 - 42030 Vezzano sul Crostolo (RE)
                        </address>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Image src="/anspi.svg" alt="Logo ANSPI — Associazione Nazionale San Paolo Italia" width={120} height={45} className="mr-2"/>
                        <Image src="/logo.svg" alt="Logo Circolo ANSPI Don Primo Mazzolari" width={120} height={45} className="mr-2"/>
                    </div>

                </div>

                <div className="mt-8 text-xs text-neutral-700 flex flex-col md:flex-row justify-between gap-4">
                    <div>
                        © {new Date().getFullYear()} Circolo ANSPI Don Primo Mazzolari — Tutti i diritti riservati.
                    </div>
                    <nav aria-label="Informazioni legali" className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:underline text-neutral-500 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/cookie-policy" className="hover:underline text-neutral-500 hover:text-primary transition-colors">Cookie Policy</Link>
                    </nav>
                </div>
            </Container>
        </footer>
    );
}
