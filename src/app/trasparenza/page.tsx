import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function TrasparenzaPage() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <SectionTitle
                    kicker="Trasparenza"
                    title="Trasparenza e Documentazione"
                    subtitle="In conformità agli obblighi di trasparenza previsti dal Codice del Terzo Settore (D.Lgs. 117/2017), mettiamo a disposizione la documentazione ufficiale."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {[
                        {
                            title: "Statuto",
                            description: "Lo statuto dell'associazione che definisce finalità, organizzazione e modalità di adesione.",
                            button: "Scarica Statuto",
                            href: "/statuto.pdf",
                            download: true,
                            icon: "📄"
                        },
                        {
                            title: "Come Associarsi",
                            description: "Informazioni su come diventare socio, modalità di adesione e quota associativa.",
                            button: "Info Associazione",
                            href: "/come-associarsi",
                            icon: "🤝"
                        }
                    ].map((item, i) => (
                        <div key={i}
                             className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm flex flex-col hover:scale-[1.02] hover:border-[#006738]/50">
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 mb-6 flex-grow">{item.description}</p>
                            <Link
                                href={item.href!}
                                download={item.download}
                                className="inline-block text-center rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary hover:bg-primary/20 transition-colors"
                            >
                                {item.button}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-3xl bg-neutral-50 p-8 border border-neutral-200">
                    <h3 className="text-xl font-bold text-primary mb-4">Finalità Non Lucrative</h3>
                    <p className="text-neutral-600 leading-relaxed">
                        Il Circolo ANSPI Don Primo Mazzolari è un&apos;associazione senza scopo di lucro. Tutte le
                        attività sono
                        svolte nel rispetto dei principi di democraticità, solidarietà e gratuità previsti dal Codice
                        del Terzo Settore.
                        Gli utili e gli avanzi di gestione sono destinati esclusivamente allo svolgimento
                        dell&apos;attività statutaria
                        ai fini dell&apos;esclusivo perseguimento di finalità civiche, solidaristiche e di utilità
                        sociale.
                    </p>
                </div>
            </Container>
        </section>
    );
}
