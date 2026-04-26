'use client';

import {useState} from "react";
import {EventType} from "@/model/event.type";
import {formatDate} from "@/utils/date.utils";
import EventModal from "./EventModal";

interface EventCardProps {
    event: EventType;
    isFeatured?: boolean;
}

export default function EventCard({event, isFeatured = false}: EventCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cardClasses = isFeatured
        ? "rounded-2xl bg-secondary/5 border-3 border-secondary/50 p-5 hover:border-secondary/50 transition-all hover:scale-[1.02] hover:bg-white/10 cursor-pointer text-left w-full block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        : "rounded-2xl bg-neutral-400/5 p-5 border border-neutral-800/5 hover:border-[#006738]/50 transition-all hover:scale-[1.02] hover:bg-white/10 cursor-pointer text-left w-full block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

    const dateLabel = `${formatDate(event.start_date)}${event.end_date ? ` - ${formatDate(event.end_date)}` : ""}`;

    return (
        <>
            <li>
                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isModalOpen}
                    aria-label={`${event.title} — ${dateLabel}. Apri dettagli evento`}
                    className={cardClasses}
                >
                    <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                        <time dateTime={event.start_date}>{formatDate(event.start_date)}</time>
                        {event.end_date && (
                            <>
                                {" - "}
                                <time dateTime={event.end_date}>{formatDate(event.end_date)}</time>
                            </>
                        )}
                    </div>
                    <div className="mt-1 font-bold text-neutral-600 text-lg">{event.title}</div>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{event.description_short}</p>
                </button>
            </li>

            <EventModal
                event={event}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
