import { AcsGlobal } from "./acsGlobal";
export interface AcsGlobalList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    acsGlobal: AcsGlobal[];
    acsGlobalSpecified: boolean;
}
