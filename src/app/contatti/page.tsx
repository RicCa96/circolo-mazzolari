import type {Metadata} from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {breadcrumbsJsonLd, contactPageJsonLd} from "@/utils/jsonld";

export const metadata: Metadata = {
    title: "Contatti — Circolo ANSPI Don Primo Mazzolari",
    description:
        "Indirizzo, email e contatti social del Circolo ANSPI Don Primo Mazzolari a Vezzano sul Crostolo (RE). Scrivi per informazioni, iscrizioni o per diventare volontario.",
    alternates: {canonical: "/contatti"},
    openGraph: {url: "/contatti", title: "Contatti — Circolo ANSPI Don Primo Mazzolari"},
};

export default function ContattiPage() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <JsonLd data={contactPageJsonLd()}/>
            <JsonLd data={breadcrumbsJsonLd([{name: "Contatti", path: "/contatti"}])}/>
            <Container>
                <SectionTitle
                    kicker="Contatti"
                    title="Mettiti in contatto con noi"
                    subtitle="Siamo a tua disposizione per informazioni sulle attività, iscrizioni o per diventare volontario."
                />

                <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
                        <div className="text-2xl mb-4" aria-hidden="true">📍</div>
                        <h2 className="text-xl font-bold text-primary mb-2">Indirizzo</h2>
                        <address className="text-neutral-600 not-italic">
                            Via XI Febbraio, 2<br/>
                            42030 Vezzano sul Crostolo (RE)
                        </address>
                    </div>

                    <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
                        <div className="text-2xl mb-4" aria-hidden="true">📧</div>
                        <h2 className="text-xl font-bold text-primary mb-2">Email</h2>
                        <p className="text-neutral-600">
                            <a href="mailto:vezzano@anspi.re.it" className="hover:underline">vezzano@anspi.re.it</a><br/>
                            <span className="text-sm font-bold text-neutral-400 mt-2 block">PEC</span>
                            <a href="mailto:mazzolari.03184@anspipec.it" className="hover:underline">mazzolari.03184@anspipec.it</a>
                        </p>
                    </div>

                    <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg lg:col-span-1 md:col-span-2 col-span-1">
                        <div className="text-2xl mb-4" aria-hidden="true">📱</div>
                        <h2 className="text-xl font-bold text-primary mb-2">Social Media</h2>
                        <ul className="grid md:grid-cols-2 gap-2 list-none p-0">
                            <li>
                                <a
                                    href="https://www.facebook.com/sagramadonnadellaneve"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Pagina Facebook della Sagra Madonna della Neve (apre in una nuova scheda)"
                                    className="flex gap-2 items-center hover:text-secondary"
                                >
                                    <FaFacebook aria-hidden="true" focusable="false"/> Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/sagra_vezzano/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Profilo Instagram Sagra Vezzano (apre in una nuova scheda)"
                                    className="flex gap-2 items-center hover:text-secondary"
                                >
                                    <FaInstagram aria-hidden="true" focusable="false"/> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/come-associarsi" className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-white hover:bg-primary/90 transition-all shadow-lg">
                        Diventa Socio
                    </Link>
                    <p className="mt-4 text-neutral-500">
                        Oppure scrivici per avere maggiori informazioni sulle quote associative.
                    </p>
                </div>
            </Container>
        </section>
    );
}
