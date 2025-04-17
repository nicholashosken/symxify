import { ParticipantFmHistory } from "./participantFmHistory";
export interface ParticipantFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    participantFmHistory: ParticipantFmHistory[];
    participantFmHistorySpecified: boolean;
}
