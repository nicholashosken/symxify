import { ConsoleFm } from "./consoleFm";

export interface ConsoleFmList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    consoleFm: ConsoleFm[];
    consoleFmSpecified: boolean;
}