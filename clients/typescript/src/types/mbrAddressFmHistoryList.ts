import { MbrAddressFmHistory } from "./mbrAddressFmHistory";

export interface MbrAddressFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    mbrAddressFmHistory: MbrAddressFmHistory[];
}