import { PrivGroup } from "./privGroup";
export interface PrivGroupList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    privGroup: PrivGroup[];
    privGroupSpecified: boolean;
}
