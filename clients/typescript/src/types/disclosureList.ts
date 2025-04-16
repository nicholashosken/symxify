import { Disclosure } from "./disclosure";

export interface DisclosureList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    disclosure: Disclosure[];
    disclosureSpecified: boolean;
}