import { ParticipantNote } from "./participantNote";
export interface ParticipantNoteList {
    hasReachedMaximumListSize: boolean | null;
    participantNote: ParticipantNote[];
}
