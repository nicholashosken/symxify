import { Cdm } from "./cdm";

export interface CdmList {
    hasReachedMaximumListSize: boolean | null;
    cdm: Cdm[];
}