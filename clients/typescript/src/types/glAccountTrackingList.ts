import { GlAccountTracking } from "./glAccountTracking";

export interface GlAccountTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    glAccountTracking: GlAccountTracking[];
    glAccountTrackingSpecified: boolean;
}