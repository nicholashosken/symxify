import { WireIntermedFiInfo } from "./wireIntermedFiInfo";

export interface WireIntermedFiInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireIntermedFiInfo: WireIntermedFiInfo[];
    wireIntermedFiInfoSpecified: boolean;
}