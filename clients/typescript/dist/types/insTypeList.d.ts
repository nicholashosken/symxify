import { InsType } from "./insType";
export interface InsTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    insType: InsType[];
    insTypeSpecified: boolean;
}
