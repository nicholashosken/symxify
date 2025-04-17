import { PrivGroup } from "./privGroup";

export interface PrivGroupList {
    hasReachedMaximumListSize: boolean | null;
    privGroup: PrivGroup[];
}