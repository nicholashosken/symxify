import { PartTrackingType } from "./partTrackingType";

export interface PartTrackingTypeList {
    hasReachedMaximumListSize: boolean | null;
    partTrackingType: PartTrackingType[];
}