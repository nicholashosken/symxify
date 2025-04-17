import { MemberRecFmHistory } from "./memberRecFmHistory";

export interface MemberRecFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    memberRecFmHistory: MemberRecFmHistory[];
}