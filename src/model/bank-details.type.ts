import {SanityDocument} from "next-sanity";

export type BankDetailsType = SanityDocument & {
    tax_id: string;
    iban: string;
    iban_bank: string;
    iban_holder: string;
};