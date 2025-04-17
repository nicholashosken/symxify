import { CollatrlTrackingType } from "./collatrlTrackingType";

export interface CollatrlTrackingTypeList {
    hasReachedMaximumListSize: boolean | null;
    collatrlTrackingType: CollatrlTrackingType[];
}