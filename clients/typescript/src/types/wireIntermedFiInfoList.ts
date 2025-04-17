import { WireIntermedFiInfo } from "./wireIntermedFiInfo";

export interface WireIntermedFiInfoList {
    hasReachedMaximumListSize: boolean | null;
    wireIntermedFiInfo: WireIntermedFiInfo[];
}