import type {Metadata} from "next";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import {client} from "@/sanity/client";
import {EventType} from "@/model/event.type";
import EventCard from "@/components/EventCard";
import {ORG_LEGAL_NAME, SITE_NAME, SITE_URL} from "@/utils/seo";

export const metadata: Metadata = {
    title: `${SITE_NAME} | APS ETS — Vezzano sul Crostolo`,
    description:
        "Circolo ANSPI Don Primo Mazzolari a Vezzano sul Crostolo (RE): APS ETS iscritta al RUNTS. Sport, oratorio, campeggi a Vaglie, Sagra della Madonna della Neve, attività per ragazzi e famiglie.",
    alternates: {canonical: "/"},
    openGraph: {
        url: "/",
        title: `${SITE_NAME} — APS ETS Vezzano sul Crostolo`,
        description:
            "Sport, cultura e amicizia a Vezzano sul Crostolo: campeggi a Vaglie, Sagra della Madonna della Neve, attività educative per ragazzi.",
    },
};

// event type documents, sorted by ascending date, only the first 3
const EVENTS_QUERY = `*[_type == "event" && featured != true]|order(start_date asc)[0...3]`;
const FEATURED_EVENT_QUERY = `*[_type == "event" && featured == true]|order(start_date asc)[0...1]`;

const options = {next: {revalidate: 30}};

function eventJsonLd(e: EventType) {
    return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: e.title,
        startDate: e.start_date,
        endDate: e.end_date || e.start_date,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        description: e.description_short || e.description || e.title,
        location: {
            "@type": "Place",
            name: "Vezzano sul Crostolo",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Vezzano sul Crostolo",
                addressRegion: "RE",
                addressCountry: "IT",
            },
        },
        organizer: {
            "@type": "Organization",
            name: ORG_LEGAL_NAME,
            url: SITE_URL,
        },
    };
}

export default async function HomePage() {
    const events = await client.fetch<EventType[]>(EVENTS_QUERY, {}, options);
    const featuredEvent = await client.fetch<EventType[]>(FEATURED_EVENT_QUERY, {}, options);
    const allEvents = [...featuredEvent, ...events];
    return (
        <>
            <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20">
                <Container>
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <Image src="/anspi.svg" alt="Logo ANSPI — Associazione Nazionale San Paolo Italia"
                                   width={200} height={70} className="mr-2" priority={true}/>

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

                        <section aria-labelledby="upcoming-events-heading"
                                 className="rounded-3xl bg-neutral p-8 text-white shadow-lg relative overflow-hidden">
                            <div aria-hidden="true"
                                className="absolute top-0 right-0 w-32 h-32 bg-[#006738]/10 rounded-full -mr-16 -mt-16"/>
                            <h2 id="upcoming-events-heading"
                                className="text-sm font-bold text-secondary uppercase tracking-widest">
                                Prossimi eventi
                            </h2>
                            {featuredEvent.length > 0 && (
                                <ul aria-label="Evento in evidenza" className="my-2 space-y-4 relative">
                                    {featuredEvent.map((e, i) => (
                                        <EventCard key={i} event={e} isFeatured={true}/>
                                    ))}
                                </ul>
                            )}
                            <ul aria-label="Altri prossimi eventi" className="mt-2 space-y-4 relative">
                                {events.map((e, i) => (
                                    <EventCard key={i} event={e}/>
                                ))}
                            </ul>
                        </section>
                    </div>
                </Container>
            </section>
            {allEvents.map((e) => (
                <script
                    key={e._id}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(eventJsonLd(e))}}
                />
            ))}
        </>
    );
}
