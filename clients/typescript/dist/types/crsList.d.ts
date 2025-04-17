import { Crs } from "./crs";
export interface CrsList {
    hasReachedMaximumListSize: boolean | null;
    crs: Crs[];
}
