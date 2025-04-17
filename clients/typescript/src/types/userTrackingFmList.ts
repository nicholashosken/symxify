import { UserTrackingFm } from "./userTrackingFm";

export interface UserTrackingFmList {
    hasReachedMaximumListSize: boolean | null;
    userTrackingFm: UserTrackingFm[];
}