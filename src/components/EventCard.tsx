'use client';

import {useState} from "react";
import {EventType} from "@/model/event.type";
import {formatDate} from "@/utils/date.utils";
import EventModal from "./EventModal";
import Link from "next/link";

interface EventCardProps {
    event: EventType;
    isFeatured?: boolean;
}

export default function EventCard({event, isFeatured = false}: EventCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cardClasses = isFeatured
        ? "rounded-2xl bg-secondary/5 border-3 border-secondary/50 p-5 hover:border-secondary/50 transition-all hover:scale-[1.02] hover:bg-white/10 cursor-pointer text-left w-full block"
        : "rounded-2xl bg-neutral-400/5 p-5 border border-neutral-800/5 hover:border-[#006738]/50 transition-all hover:scale-[1.02] hover:bg-white/10 cursor-pointer text-left w-full block";

    return (
        <>
            <li className={cardClasses} onClick={() => setIsModalOpen(true)}>
                <div
                    className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {formatDate(event.start_date)}
                    {event.end_date && ` - ${formatDate(event.end_date)}`}
                </div>
                <div className="mt-1 font-bold text-neutral-600 text-lg">{event.title}</div>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{event.description_short}</p>
                {event.link && (
                    <Link href={event.link}
                          className="text-sm font-semibold text-secondary hover:underline">
                        Scopri di più
                    </Link>
                )}
            </li>

            <EventModal
                event={event}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
