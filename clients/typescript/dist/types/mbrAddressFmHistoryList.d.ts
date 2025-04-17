import { MbrAddressFmHistory } from "./mbrAddressFmHistory";
export interface MbrAddressFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    mbrAddressFmHistory: MbrAddressFmHistory[];
    mbrAddressFmHistorySpecified: boolean;
}
