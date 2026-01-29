import {SanityDocument} from "next-sanity";

export type EventType = SanityDocument & {
    title: string;
    start_date: string; // ISO date string
    end_date?: string;  // ISO date string (optional)
    description_short: string;
    description: string;
    link?: string;
    featured: boolean;
};