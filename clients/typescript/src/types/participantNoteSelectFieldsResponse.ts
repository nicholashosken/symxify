import { ParticipantNote } from "./participantNote";
import { VersionType } from "./versionType";

export interface ParticipantNoteSelectFieldsResponse {
    participantNote: ParticipantNote;
    version1: VersionType;
    messageId: string;
}