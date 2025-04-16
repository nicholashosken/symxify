import { GlTrackingType } from "./glTrackingType";

export interface GlTrackingTypeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glTrackingType: GlTrackingType[];
    glTrackingTypeSpecified: boolean;
}