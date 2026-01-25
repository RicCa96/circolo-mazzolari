import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { mainActivities, otherActivities } from "@/lib/activities";

function Card({
                  title,
                  tag,
                  description,
                  highlights,
              }: {
    title: string;
    tag: string;
    description: string;
    highlights: string[];
}) {
    return (
        <div className="rounded-3xl bg-white p-8 text-neutral-900 shadow-xl border border-primary/10 transition-transform hover:scale-[1.02]">
            <div className="text-xs font-bold text-secondary uppercase tracking-wider">{tag}</div>
            <div className="mt-3 text-2xl font-bold text-neutral-900">{title}</div>
            <p className="mt-4 text-neutral-500 leading-relaxed">{description}</p>

            <ul className="mt-6 space-y-3 text-neutral-600">
                {highlights.map((h) => (
                    <li key={h} className="flex gap-3 items-start">
                        <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span>{h}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function AttivitaPage() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20 border-b border-primary/10">
            <Container>
                <SectionTitle
                    kicker="Le nostre attività"
                    title="Esperienze che uniscono il paese"
                    subtitle="Le due iniziative principali del Circolo: i campeggi a Vaglie e la Sagra della Madonna della Neve. In più, sport e attività educative."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {mainActivities.map((a) => (
                        <Card key={a.slug} {...a} />
                    ))}
                </div>

                <div className="mt-12">
                    <div className="text-lg font-bold text-neutral-900">Altre attività</div>
                    <p className="mt-2 text-neutral-600">
                        Durante l’anno portiamo avanti anche proposte sportive e progetti per ragazzi e famiglie.
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {otherActivities.map((a) => (
                            <Card key={a.slug} {...a} />
                        ))}
                    </div>
                </div>

                <div className="mt-16 rounded-3xl bg-primary p-8 text-white shadow-xl">
                    <div className="text-xl font-bold">Info e iscrizioni</div>
                    <p className="mt-3 text-blue-50 text-lg">
                        Vuoi partecipare ai campeggi o dare una mano per la Sagra? Scrivici:
                        <span className="font-bold text-white"> vezzano@anspi.re.it</span>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
