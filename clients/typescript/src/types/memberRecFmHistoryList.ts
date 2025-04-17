import { MemberRecFmHistory } from "./memberRecFmHistory";

export interface MemberRecFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    memberRecFmHistory: MemberRecFmHistory[];
    memberRecFmHistorySpecified: boolean;
}