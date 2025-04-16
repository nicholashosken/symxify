import { WireMisc } from "./wireMisc";

export interface WireMiscList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireMisc: WireMisc[];
    wireMiscSpecified: boolean;
}