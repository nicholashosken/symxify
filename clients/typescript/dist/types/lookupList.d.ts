import { Lookup } from "./lookup";
export interface LookupList {
    hasReachedMaximumListSize: boolean | null;
    lookup: Lookup[];
}
