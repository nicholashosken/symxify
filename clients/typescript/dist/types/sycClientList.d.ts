import { SycClient } from "./sycClient";
export interface SycClientList {
    hasReachedMaximumListSize: boolean | null;
    sycClient: SycClient[];
}
