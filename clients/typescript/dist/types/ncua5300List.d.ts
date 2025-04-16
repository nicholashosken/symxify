import { Ncua5300 } from "./ncua5300";
export interface Ncua5300List {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ncua5300: Ncua5300[];
    ncua5300Specified: boolean;
}
