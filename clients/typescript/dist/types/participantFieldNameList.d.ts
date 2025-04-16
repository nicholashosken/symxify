import { ParticipantFieldName } from "./participantFieldName";
export interface ParticipantFieldNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    participantFieldName: ParticipantFieldName[];
    participantFieldNameSpecified: boolean;
}
