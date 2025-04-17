import { ParticipantNote } from "./participantNote";

export interface ParticipantNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    participantNote: ParticipantNote[];
    participantNoteSpecified: boolean;
}