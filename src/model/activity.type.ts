import {SanityDocument} from "next-sanity";

export type ActivityType = SanityDocument & {
    _type: 'activity';
    tags?: string[];
    title: string;
    description: string;
    highlights?: string[];
    featured?: boolean;
};