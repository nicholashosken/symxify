import { UserTrackingFm } from "./userTrackingFm";
export interface UserTrackingFmList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    userTrackingFm: UserTrackingFm[];
    userTrackingFmSpecified: boolean;
}
