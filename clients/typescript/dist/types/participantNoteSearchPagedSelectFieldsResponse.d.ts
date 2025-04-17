import { ParticipantNote } from "./participantNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantNoteSearchPagedSelectFieldsResponse {
    participantNote: ParticipantNote[];
    participantNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
