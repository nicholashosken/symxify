import { WireBfc } from "./wireBfc";

export interface WireBfcList {
    hasReachedMaximumListSize: boolean | null;
    wireBfc: WireBfc[];
}