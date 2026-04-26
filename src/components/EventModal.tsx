'use client';

import Modal from "./Modal";
import {EventType} from "@/model/event.type";
import {formatDate} from "@/utils/date.utils";

interface EventModalProps {
    event: EventType;
    isOpen: boolean;
    onClose: () => void;
}

export default function EventModal({event, isOpen, onClose}: EventModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={event.title} showFooter={false}>
            <div className="flex flex-col gap-4">
                <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                    <time dateTime={event.start_date}>{formatDate(event.start_date)}</time>
                    {event.end_date && (
                        <>
                            {" - "}
                            <time dateTime={event.end_date}>{formatDate(event.end_date)}</time>
                        </>
                    )}
                </div>

                <div className="text-neutral-600 leading-relaxed whitespace-pre-wrap">
                    {event.description}
                </div>

                {event.link && (
                    <div className="mt-2">
                        <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Scopri di più su ${event.title} (apre in una nuova scheda)`}
                            className="inline-flex items-center text-sm font-semibold text-secondary hover:underline gap-1"
                        >
                            <span>Scopri di più</span>
                        </a>
                    </div>
                )}
            </div>
        </Modal>
    );
}
