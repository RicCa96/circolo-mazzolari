'use client';

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import {useState} from "react";
import Modal from "@/components/Modal";
import CopyButton from "@/components/CopyButton";

export default function TrasparenzaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                            onClick: () => setIsModalOpen(true),
                            icon: "🤝"
                        }
                    ].map((item, i) => (
                        <div key={i}
                             className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm flex flex-col hover:scale-[1.02] hover:border-[#006738]/50">
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-600 mb-6 flex-grow">{item.description}</p>
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    download={item.download}
                                    className="inline-block text-center rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary hover:bg-primary/20 transition-colors"
                                >
                                    {item.button}
                                </Link>
                            ) : (
                                <button
                                    onClick={item.onClick}
                                    className="inline-block text-center rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                                >
                                    {item.button}
                                </button>
                            )}
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

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Istruzioni per l'iscrizione"
            >
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-primary mb-2 text-lg">Costi per il 2026</h4>
                        <p className="text-sm text-neutral-500 mb-2 italic">(Costo invariato rispetto al 2025)</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><span className="font-semibold text-primary">10 €</span> adulti</li>
                            <li><span className="font-semibold text-primary">7 €</span> ragazzi (entro i 18 anni non
                                compiuti)
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 bg-secondary/10 rounded-2xl border border-secondary/10">
                        <h4 className="font-bold text-secondary mb-2">Semplice Rinnovo</h4>
                        <p className="text-sm mb-3 text-secondary">L’adesione può essere fatta mediante bonifico
                            bancario:</p>
                        <div className="bg-white p-3 rounded-xl border border-secondary/20 font-mono text-xs break-all">
                            <p className="mb-1 text-neutral-400 uppercase font-sans font-bold tracking-wider">IBAN</p>
                            <div className="flex justify-between items-center">
                                <span>IT90 D 05034 66420 000000023254</span>
                                <CopyButton text="IT90D050346642000000023254"
                                            className="mt-2 hover:text-neutral-800 text-xs"/>
                            </div>
                        </div>
                        <p className="mt-2 text-xs text-secondary">
                            Presso <span className="font-semibold">BANCO BPM di PUIANELLO</span>.<br/>
                            Specificando <span className="font-semibold">Cognome e Nome</span> del/degli iscritto/i.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-2">Prima Iscrizione</h4>
                        <ol className="space-y-3">
                            <li className="flex gap-3">
                                <span
                                    className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
                                <p className="text-sm">Scarica il <Link href="./adesione.pdf" download="richiesta_adesione_mazzolari.pdf"
                                                                        className="text-primary underline font-medium">modulo
                                    per la richiesta di adesione</Link></p>
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
                                <p className="text-sm">Compila il modulo in ogni sua parte e apponi firme olografe (per
                                    i minori è necessaria la firma di un genitore/tutore)</p>
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
                                <p className="text-sm">Invia il modulo compilato e firmato all&apos;indirizzo <a
                                    href="mailto:vezzano@anspi.re.it"
                                    className="text-primary underline font-medium">vezzano@anspi.re.it</a></p>
                            </li>
                        </ol>
                    </div>

                    <div className="pt-4 border-t border-neutral-100">
                        <p className="text-xs text-neutral-500 leading-relaxed">
                            Ai nuovi iscritti, o ai rinnovanti che non abbiano già certificato la mail, verrà inviata
                            da <span className="font-medium">Tesseramento ANSPI</span> &lt;tessera@anspi.it&gt; una
                            email alla quale si deve rispondere per validare l&apos;indirizzo a cui spedire la tessera
                            elettronica.
                        </p>
                    </div>
                </div>
            </Modal>
        </section>
    );
}
