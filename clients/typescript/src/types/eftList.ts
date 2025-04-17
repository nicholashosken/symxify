import { Eft } from "./eft";

export interface EftList {
    hasReachedMaximumListSize: boolean | null;
    eft: Eft[];
}