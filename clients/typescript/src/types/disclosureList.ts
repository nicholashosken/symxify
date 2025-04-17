import { Disclosure } from "./disclosure";

export interface DisclosureList {
    hasReachedMaximumListSize: boolean | null;
    disclosure: Disclosure[];
}