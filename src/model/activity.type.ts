import {SanityDocument} from "next-sanity";

export type ActivityType = SanityDocument & {
    tags?: string[];
    title: string;
    description: string;
    highlights?: string[];
    featured?: boolean;
};