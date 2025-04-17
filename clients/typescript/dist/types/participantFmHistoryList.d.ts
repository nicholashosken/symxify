import { ParticipantFmHistory } from "./participantFmHistory";
export interface ParticipantFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    participantFmHistory: ParticipantFmHistory[];
}
