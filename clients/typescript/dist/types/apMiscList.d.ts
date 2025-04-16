import { ApMisc } from "./apMisc";
export interface ApMiscList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    apMisc: ApMisc[];
    apMiscSpecified: boolean;
}
