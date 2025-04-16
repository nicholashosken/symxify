import { Eft } from "./eft";
export interface EftList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    eft: Eft[];
    eftSpecified: boolean;
}
