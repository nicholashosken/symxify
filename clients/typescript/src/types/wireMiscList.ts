import { WireMisc } from "./wireMisc";

export interface WireMiscList {
    hasReachedMaximumListSize: boolean | null;
    wireMisc: WireMisc[];
}