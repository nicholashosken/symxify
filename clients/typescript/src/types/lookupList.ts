import { Lookup } from "./lookup";

export interface LookupList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    lookup: Lookup[];
    lookupSpecified: boolean;
}