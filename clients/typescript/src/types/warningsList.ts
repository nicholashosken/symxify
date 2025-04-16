import { Warnings } from "./warnings";

export interface WarningsList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    warnings: Warnings[];
    warningsSpecified: boolean;
}