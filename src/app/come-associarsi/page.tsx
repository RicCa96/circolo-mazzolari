import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import {client} from "@/sanity/client";
import {SubscriptionCostType} from "@/model/subscription-cost.type";
import {BankDetailsType} from "@/model/bank-details.type";

const CURRENT_YEAR = new Date().getFullYear();
const SUBSCRIPTION_PRICES_QUERY = `*[_type == "subscriptionCost" && year == ${CURRENT_YEAR}]|order(sort_order asc)`;
const BANK_DETAILS_QUERY = `*[_type == "bankInfo"][0]`;

export default async function ComeAssociarsiPage() {
    const subscriptionPrices = await client.fetch<SubscriptionCostType[]>(SUBSCRIPTION_PRICES_QUERY);
    const bankDetails = await client.fetch<BankDetailsType>(BANK_DETAILS_QUERY);
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <SectionTitle
                    kicker="Associazione"
                    title="Come Associarsi"
                    subtitle="Informazioni su come diventare socio, modalità di adesione e quota associativa per il 2026."
                />

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        {/* Costi */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm border border-primary/10">
                            <h3 className="text-2xl font-bold text-primary mb-4">Costi per il {CURRENT_YEAR}</h3>
                            <ul className="space-y-3">
                                {subscriptionPrices.map((price) => (
                                    <li key={price._id}
                                        className="flex items-center justify-between p-4 rounded-2xl bg-primary/5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-primary">{price.tier}</span>
                                            {price.note &&
                                                <span className="text-xs text-neutral-500">{price.note}</span>}
                                        </div>
                                        <span
                                            className="text-2xl font-black text-primary whitespace-nowrap">{price.price} €</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Rinnovo */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm border border-secondary/20 bg-secondary/5">
                            <h4 className="text-2xl font-bold text-secondary mb-4">Semplice Rinnovo</h4>
                            <p className="text-neutral-600 mb-6">L’adesione può essere fatta mediante bonifico
                                bancario:</p>
                            <div
                                className="bg-white p-4 rounded-xl border border-secondary/20 font-mono text-sm break-all mb-4">
                                <p className="mb-1 text-neutral-400 uppercase font-sans font-bold tracking-wider text-xs">IBAN</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-secondary font-bold">{bankDetails.iban}</span>
                                    <CopyButton text={bankDetails.iban}
                                                className="text-secondary hover:text-secondary/80"/>
                                </div>
                            </div>
                            <p className="text-sm text-secondary">
                                Presso <span className="font-semibold">{bankDetails.iban_bank}</span>.<br/>
                                Specificando <span className="font-semibold">Cognome e Nome</span> del/degli iscritto/i.
                            </p>
                        </div>
                    </div>

                    {/* Prima Iscrizione */}
                    <div className="rounded-3xl bg-white p-8 shadow-sm border border-primary/10">
                        <h4 className="text-2xl font-bold text-primary mb-6">Prima Iscrizione</h4>
                        <ol className="space-y-6">
                            <li className="flex gap-4">
                                <span
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                                <div>
                                    <p className="font-bold text-primary">Scarica il modulo</p>
                                    <p className="text-neutral-600 text-sm mb-2">Scarica il modulo per la richiesta di
                                        adesione:</p>
                                    <Link href="/adesione.pdf" download="richiesta_adesione_mazzolari.pdf"
                                          className="inline-flex items-center text-primary underline font-bold decoration-2 underline-offset-4">
                                        Modulo Adesione (PDF)
                                    </Link>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                                <div>
                                    <p className="font-bold text-primary">Compila e firma</p>
                                    <p className="text-neutral-600 text-sm">Compila il modulo in ogni sua parte e apponi
                                        firme olografe (per i minori è necessaria la firma di un genitore/tutore).</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                                <div>
                                    <p className="font-bold text-primary">Invia il modulo</p>
                                    <p className="text-neutral-600 text-sm mb-2">Invia il modulo compilato e firmato
                                        all&apos;indirizzo:</p>
                                    <a href="mailto:vezzano@anspi.re.it"
                                       className="text-primary underline font-bold decoration-2 underline-offset-4">
                                        vezzano@anspi.re.it
                                    </a>
                                </div>
                            </li>
                        </ol>

                        <div className="mt-8 pt-6 border-t border-neutral-100">
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                Ai nuovi iscritti, o ai rinnovanti che non abbiano già certificato la mail, verrà
                                inviata
                                da <span
                                className="font-medium text-neutral-700">Tesseramento ANSPI</span> &lt;tessera@anspi.it&gt; una
                                email alla quale si deve rispondere per validare l&apos;indirizzo a cui spedire la
                                tessera
                                elettronica.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
