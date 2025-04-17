import { ParticipantFields } from "./participantFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantSingleSelectableFields {
    includeAllParticipantFieldsValue: boolean;
    includeAllParticipantFieldsValueSpecified: boolean;
    includeAllParticipantFields: boolean | null;
    participantFields: ParticipantFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}