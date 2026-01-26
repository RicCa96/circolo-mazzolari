import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import {FaFacebook, FaInstagram} from "react-icons/fa";

export default function ContattiPage() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <SectionTitle
                    kicker="Contatti"
                    title="Mettiti in contatto con noi"
                    subtitle="Siamo a tua disposizione per informazioni sulle attività, iscrizioni o per diventare volontario."
                />

                <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
                        <div className="text-2xl mb-4">📍</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Indirizzo</h3>
                        <p className="text-neutral-600">
                            Via XI Febbraio, 2<br/>
                            42030 Vezzano sul Crostolo (RE)
                        </p>
                    </div>

                    <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
                        <div className="text-2xl mb-4">📧</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                        <p className="text-neutral-600">
                            <a href="mailto:vezzano@anspi.re.it">vezzano@anspi.re.it</a><br/>
                            <span className="text-sm font-bold text-neutral-400 mt-2 block">PEC</span>
                            <a href="mailto:mazzolari.03184@anspipec.it">mazzolari.03184@anspipec.it</a>
                        </p>
                    </div>

                    <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm lg:col-span-1 md:col-span-2 col-span-1">
                        <div className="text-2xl mb-4">📱</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Social Media</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                            <a href="https://www.facebook.com/sagramadonnadellaneve" target="_blank" className="flex gap-2 items-center hover:text-secondary"><FaFacebook/> Facebook</a>
                            <a href="https://www.instagram.com/sagra_vezzano/" target="_blank" className="flex gap-2 items-center hover:text-secondary"><FaInstagram/> Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button className="rounded-full bg-primary px-8 py-4 text-lg font-bold text-white hover:bg-primary/90 transition-all shadow-lg">
                        Diventa Socio
                    </button>
                    <p className="mt-4 text-neutral-500">
                        Oppure scrivici per avere maggiori informazioni sulle quote associative.
                    </p>
                </div>
            </Container>
        </section>
    );
}
