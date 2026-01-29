import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import {client} from "@/sanity/client";
import {EventType} from "@/model/event.type";
import EventCard from "@/components/EventCard";

// event type documents, sorted by ascending date, only the first 3
const EVENTS_QUERY = `*[_type == "event" && featured != true]|order(start_date asc)[0...3]`;
const FEATURED_EVENT_QUERY = `*[_type == "event" && featured == true]|order(start_date asc)[0...1]`;

const options = {next: {revalidate: 30}};

export default async function HomePage() {
    const events = await client.fetch<EventType[]>(EVENTS_QUERY, {}, options);
    const featuredEvent = await client.fetch<EventType[]>(FEATURED_EVENT_QUERY, {}, options);
    return (
        <>
            <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20">
                <Container>
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <Image src="./anspi.svg" alt="Logo ANSPI" width={200} height={70} className="mr-2"
                                   priority={true}/>

                            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl leading-[1.1]">
                                Benvenuti al Circolo ANSPI Don Primo Mazzolari
                            </h1>

                            <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
                                Crescere insieme attraverso lo sport, la cultura e l&apos;amicizia.
                                Siamo un&apos;Associazione di Promozione Sociale (APS) iscritta al RUNTS,
                                punto di riferimento per la comunità di Vezzano sul Crostolo.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/come-associarsi"
                                    className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                                >
                                    Diventa socio
                                </Link>
                                <Link
                                    href="/attivita"
                                    className="rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-all"
                                >
                                    Scopri le nostre attività
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-neutral p-8 text-white shadow-2xl relative overflow-hidden">
                            <div
                                className="absolute top-0 right-0 w-32 h-32 bg-[#006738]/10 rounded-full -mr-16 -mt-16"/>
                            <div className="text-sm font-bold text-secondary uppercase tracking-widest">Prossimi
                                eventi
                            </div>
                            <ul className="my-2 space-y-4 relative">
                                {featuredEvent.map((e, i) => (
                                    <EventCard key={i} event={e} isFeatured={true} />
                                ))}
                            </ul>
                            <ul className="mt-2 space-y-4 relative">
                                {events.map((e, i) => (
                                    <EventCard key={i} event={e} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
