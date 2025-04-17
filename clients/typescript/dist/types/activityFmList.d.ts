import { ActivityFm } from "./activityFm";
export interface ActivityFmList {
    hasReachedMaximumListSize: boolean | null;
    activityFm: ActivityFm[];
}
