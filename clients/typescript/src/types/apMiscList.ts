import { ApMisc } from "./apMisc";

export interface ApMiscList {
    hasReachedMaximumListSize: boolean | null;
    apMisc: ApMisc[];
}