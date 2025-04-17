import { ParticipantNote } from "./participantNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantNoteSelectFieldsResponse {
    participantNote: ParticipantNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}