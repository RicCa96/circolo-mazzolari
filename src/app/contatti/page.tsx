import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function ContattiPage() {
    return (
        <section className="py-14">
            <Container>
                <SectionTitle
                    kicker="Contatti"
                    title="Mettiti in contatto con noi"
                    subtitle="Siamo a tua disposizione per informazioni sulle attività, iscrizioni o per diventare volontario."
                />

                <div className="mt-10 grid gap-8 md:grid-cols-3">
                    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="text-2xl mb-4">📍</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Indirizzo</h3>
                        <p className="text-neutral-600">
                            Via XI Febbraio, 2<br />
                            42030 Vezzano sul Crostolo (RE)
                        </p>
                    </div>

                    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="text-2xl mb-4">📧</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                        <p className="text-neutral-600">
                            vezzano@anspi.re.it<br />
                            <span className="text-sm font-bold text-neutral-400 mt-2 block">PEC</span>
                            mazzolari.03184@anspipec.it
                        </p>
                    </div>

                    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="text-2xl mb-4">📱</div>
                        <h3 className="text-xl font-bold text-primary mb-2">Social Media</h3>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-primary hover:underline font-bold">Facebook</a>
                            <a href="#" className="text-primary hover:underline font-bold">Instagram</a>
                            <a href="#" className="text-primary hover:underline font-bold">YouTube</a>
                            <a href="#" className="text-primary hover:underline font-bold">WhatsApp</a>
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
