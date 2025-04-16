import { Misc } from "./misc";

export interface MiscList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    misc: Misc[];
    miscSpecified: boolean;
}