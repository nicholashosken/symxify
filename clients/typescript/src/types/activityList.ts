import { Activity } from "./activity";

export interface ActivityList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    activity: Activity[];
    activitySpecified: boolean;
}