import { WireReceiverFiInfo } from "./wireReceiverFiInfo";

export interface WireReceiverFiInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireReceiverFiInfo: WireReceiverFiInfo[];
    wireReceiverFiInfoSpecified: boolean;
}