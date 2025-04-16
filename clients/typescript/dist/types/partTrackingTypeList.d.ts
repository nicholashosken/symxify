import { PartTrackingType } from "./partTrackingType";
export interface PartTrackingTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    partTrackingType: PartTrackingType[];
    partTrackingTypeSpecified: boolean;
}
