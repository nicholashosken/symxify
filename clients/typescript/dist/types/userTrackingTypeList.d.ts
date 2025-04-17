import { UserTrackingType } from "./userTrackingType";
export interface UserTrackingTypeList {
    hasReachedMaximumListSize: boolean | null;
    userTrackingType: UserTrackingType[];
}
