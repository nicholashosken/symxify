import { Activity } from "./activity";

export interface ActivityList {
    hasReachedMaximumListSize: boolean | null;
    activity: Activity[];
}