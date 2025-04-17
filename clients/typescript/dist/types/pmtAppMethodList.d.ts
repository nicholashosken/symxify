import { PmtAppMethod } from "./pmtAppMethod";
export interface PmtAppMethodList {
    hasReachedMaximumListSize: boolean | null;
    pmtAppMethod: PmtAppMethod[];
}
