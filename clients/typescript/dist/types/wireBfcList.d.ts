import { WireBfc } from "./wireBfc";
export interface WireBfcList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireBfc: WireBfc[];
    wireBfcSpecified: boolean;
}
