import { Warnings } from "./warnings";
export interface WarningsList {
    hasReachedMaximumListSize: boolean | null;
    warnings: Warnings[];
}
