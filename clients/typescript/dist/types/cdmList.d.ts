import { Cdm } from "./cdm";
export interface CdmList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cdm: Cdm[];
    cdmSpecified: boolean;
}
