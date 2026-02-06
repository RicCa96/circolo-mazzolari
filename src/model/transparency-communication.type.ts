import {SanityDocument} from "next-sanity";

export type TransparencyCommunication = SanityDocument & {
    title: string;
    body: string;
};