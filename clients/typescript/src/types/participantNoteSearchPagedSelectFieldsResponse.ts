import { ParticipantNote } from "./participantNote";
import { VersionType } from "./versionType";

export interface ParticipantNoteSearchPagedSelectFieldsResponse {
    participantNote: ParticipantNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}