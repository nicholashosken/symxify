import { PmtAppMethod } from "./pmtAppMethod";
export interface PmtAppMethodList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    pmtAppMethod: PmtAppMethod[];
    pmtAppMethodSpecified: boolean;
}
