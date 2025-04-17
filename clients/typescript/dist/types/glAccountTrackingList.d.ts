import { GlAccountTracking } from "./glAccountTracking";
export interface GlAccountTrackingList {
    hasReachedMaximumListSize: boolean | null;
    glAccountTracking: GlAccountTracking[];
}
