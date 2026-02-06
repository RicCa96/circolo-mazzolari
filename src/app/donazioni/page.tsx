import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CopyButton from "@/components/CopyButton";
import {client} from "@/sanity/client";
import {BankDetailsType} from "@/model/bank-details.type";

const BANK_DETAILS_QUERY = `*[_type == "bankInfo"][0]`;

export default async function DonazioniPage() {
    const bankDetails = await client.fetch<BankDetailsType>(BANK_DETAILS_QUERY);
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <SectionTitle
                    kicker="Sostienici"
                    title="Donazioni e 5x1000"
                    subtitle="Aiutaci a far crescere il nostro circolo e le attività per i ragazzi della comunità."
                />

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl bg-white p-8 text-neutral-900 shadow-lg border border-primary/10">
                        <h3 className="text-2xl font-bold text-secondary mb-4">5x1000</h3>
                        <p className="text-neutral-600 leading-relaxed mb-6">
                            Puoi sostenere il Circolo ANSPI Don Primo Mazzolari destinando il tuo 5x1000 nella
                            dichiarazione dei redditi.
                            Un gesto semplice che per noi significa molto.
                        </p>
                        <div className="bg-[#006738]/5 rounded-2xl p-6 border border-[#006738]/10">
                            <p className="text-sm uppercase tracking-widest text-secondary font-bold mb-2">Codice
                                Fiscale</p>
                            <p className="text-3xl font-mono font-bold tracking-tighter text-secondary flex justify-between">
                                <span>{bankDetails.tax_id}</span>
                                <CopyButton text={bankDetails.tax_id}
                                            className="mt-4 text-secondary hover:text-secondary/80"/>
                            </p>
                        </div>
                        <p className="mt-6 text-sm text-neutral-500">
                            Basta firmare nel riquadro &quot;Sostegno degli Enti del Terzo Settore&quot; e inserire il
                            nostro codice fiscale.
                        </p>
                    </div>

                    <div
                        className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-4">Donazioni</h3>
                        <p className="text-neutral-600 leading-relaxed mb-6">
                            Le tue donazioni ci permettono di mantenere le strutture, acquistare attrezzature sportive e
                            sostenere i progetti educativi per i più giovani.
                        </p>
                        <div className="space-y-4">
                            <div
                                className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                                <p className="text-xs font-bold text-neutral-400 uppercase">IBAN</p>
                                <p className="text-lg font-mono font-bold text-primary flex justify-between">
                                    <span>{bankDetails.iban}</span>
                                    <CopyButton text={bankDetails.iban}
                                                className="mt-2 text-primary hover:text-primary/80 text-xs"/>
                                </p>
                                <p className="text-xs font-mono font-bold text-neutral-900">presso&nbsp;
                                    {bankDetails.iban_bank}</p>
                            </div>
                            <div
                                className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                                <p className="text-xs font-bold text-neutral-400 uppercase">Intestato a</p>
                                <p className="text-lg font-bold text-neutral-900">{bankDetails.iban_holder}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 rounded-3xl bg-primary/5 p-8 border border-primary/10 text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">Grazie per il tuo sostegno!</h3>
                    <p className="text-neutral-600">Ogni contributo, piccolo o grande, aiuta a costruire il futuro della
                        nostra comunità.</p>
                </div>
            </Container>
        </section>
    );
}
