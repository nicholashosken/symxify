import { ActivityFm } from "./activityFm";

export interface ActivityFmList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    activityFm: ActivityFm[];
    activityFmSpecified: boolean;
}