import { UserTrackingType } from "./userTrackingType";
export interface UserTrackingTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    userTrackingType: UserTrackingType[];
    userTrackingTypeSpecified: boolean;
}
