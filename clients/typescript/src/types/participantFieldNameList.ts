import { ParticipantFieldName } from "./participantFieldName";

export interface ParticipantFieldNameList {
    hasReachedMaximumListSize: boolean | null;
    participantFieldName: ParticipantFieldName[];
}