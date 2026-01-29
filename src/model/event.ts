import {SanityDocument} from "next-sanity";

export type EventType = SanityDocument & {
    _type: 'event';
    title: string;
    date: string;           // ISO date string
    description: string;
    link?: string;          // optional
    featured?: boolean;     // optional, defaults to false in schema
};