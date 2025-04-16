import { Crs } from "./crs";

export interface CrsList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    crs: Crs[];
    crsSpecified: boolean;
}