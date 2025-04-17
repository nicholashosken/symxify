import { WireFiToFiInfo } from "./wireFiToFiInfo";

export interface WireFiToFiInfoList {
    hasReachedMaximumListSize: boolean | null;
    wireFiToFiInfo: WireFiToFiInfo[];
}