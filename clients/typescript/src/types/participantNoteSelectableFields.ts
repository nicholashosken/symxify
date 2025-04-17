import { ParticipantNoteFields } from "./participantNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantNoteSelectableFields {
    includeAllParticipantNoteFieldsValue: boolean;
    includeAllParticipantNoteFieldsValueSpecified: boolean;
    includeAllParticipantNoteFields: boolean | null;
    participantNoteFields: ParticipantNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}