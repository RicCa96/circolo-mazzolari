import type {Metadata} from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import {client} from "@/sanity/client";
import {BoardMemberType} from "@/model/board-member.type";
import {TransparencyCommunication} from "@/model/transparency-communication.type";

export const metadata: Metadata = {
    title: "Trasparenza — Statuto e organi sociali",
    description:
        "Documenti di trasparenza del Circolo ANSPI Don Primo Mazzolari ETS: statuto, informativa privacy, consiglio direttivo e comunicazioni obbligatorie ai sensi del D.Lgs. 117/2017.",
    alternates: {canonical: "/trasparenza"},
    openGraph: {url: "/trasparenza", title: "Trasparenza — Circolo Don Primo Mazzolari ETS"},
};

const BOARD_MEMBERS_QUERY = `*[_type == "boardMember"] | order(
  (role == "Presidente") desc,
  (role == "Vicepresidente") desc,
  (role == "Tesoriere") desc,
  (role == "Segretario") desc,
  (role == "Consigliere") desc,
  surname asc,
  name asc
)`;

const TRANSPARENCY_COMMUNICATIONS_QUERY = `*[_type == "transparencyCommunication"] | order(title asc)`;

export default async function TrasparenzaPage() {
    const boardMembers = await client.fetch<BoardMemberType[]>(BOARD_MEMBERS_QUERY);
    const transparencyCommunications = await client.fetch<TransparencyCommunication[]>(TRANSPARENCY_COMMUNICATIONS_QUERY);
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <SectionTitle
                    kicker="Trasparenza"
                    title="Trasparenza e Documentazione"
                    subtitle="In conformità agli obblighi di trasparenza previsti dal Codice del Terzo Settore (D.Lgs. 117/2017), mettiamo a disposizione la documentazione ufficiale."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                            title: "Privacy",
                            description: "Informativa completa sul trattamento dei dati personali (GDPR).",
                            button: "Scarica Informativa",
                            href: "/trattamento.pdf",
                            download: "informativa_trattamento_dati_mazzolari.pdf",
                            icon: "🔒"
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
                             className="rounded-3xl border border-primary/10 bg-white p-6 shadow-lg flex flex-col hover:scale-[1.02] hover:border-[#006738]/50">
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
                    {boardMembers.length > 0 && (
                        <div
                            className="md:col-span-3 rounded-3xl border border-primary/10 bg-white p-8 shadow-lg transition-all">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-4xl">👥</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary">Organo di Amministrazione</h3>
                                    <p className="text-neutral-600">Il Consiglio Direttivo attualmente in carica</p>
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {boardMembers.map((member) => (
                                    <div key={member._id}
                                         className="flex flex-col p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                        <span
                                            className="font-bold text-primary leading-tight">{member.surname} {member.name}</span>
                                        <span
                                            className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">{member.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {transparencyCommunications && transparencyCommunications.map((c) => (
                    <div key={c._id} className="mt-12 rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
                        <h3 className="text-xl font-bold text-primary mb-4">{c.title}</h3>
                        <p className="text-neutral-600 leading-relaxed">{c.body}</p>
                    </div>
                ))}

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
