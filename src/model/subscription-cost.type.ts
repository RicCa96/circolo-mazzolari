import {SanityDocument} from "next-sanity";

export type SubscriptionCostType = SanityDocument & {
    _type: 'subscriptionCost';
    tier: string;
    price: number;
    note?: string;
};