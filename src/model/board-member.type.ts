import {SanityDocument} from "next-sanity";

type BoardMemberRole = 'Presidente' | 'Vicepresidente' | 'Tesoriere' | 'Segretario' | 'Consigliere'

export type BoardMemberType = SanityDocument & {
    name: string;
    surname: string;
    role: BoardMemberRole;
};