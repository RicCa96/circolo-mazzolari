import {SanityDocument} from "next-sanity";

export type SubscriptionCostType = SanityDocument & {
    year: number;
    sort_order: number;
    tier: string;
    price: number;
    note?: string;
};