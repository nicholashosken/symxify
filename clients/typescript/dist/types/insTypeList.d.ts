import { InsType } from "./insType";
export interface InsTypeList {
    hasReachedMaximumListSize: boolean | null;
    insType: InsType[];
}
