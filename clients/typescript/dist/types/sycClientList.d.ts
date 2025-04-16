import { SycClient } from "./sycClient";
export interface SycClientList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    sycClient: SycClient[];
    sycClientSpecified: boolean;
}
