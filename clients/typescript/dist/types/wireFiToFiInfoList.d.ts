import { WireFiToFiInfo } from "./wireFiToFiInfo";
export interface WireFiToFiInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireFiToFiInfo: WireFiToFiInfo[];
    wireFiToFiInfoSpecified: boolean;
}
