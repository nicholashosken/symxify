import { SycGeneral } from "./sycGeneral";

export interface SycGeneralList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    sycGeneral: SycGeneral[];
    sycGeneralSpecified: boolean;
}