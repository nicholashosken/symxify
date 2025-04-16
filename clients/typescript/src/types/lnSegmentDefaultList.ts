import { LnSegmentDefault } from "./lnSegmentDefault";

export interface LnSegmentDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    lnSegmentDefault: LnSegmentDefault[];
    lnSegmentDefaultSpecified: boolean;
}