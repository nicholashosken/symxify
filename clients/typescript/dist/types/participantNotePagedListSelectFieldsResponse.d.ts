import { ParticipantNote } from "./participantNote";
import { VersionType } from "./versionType";
export interface ParticipantNotePagedListSelectFieldsResponse {
    participantNote: ParticipantNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}
