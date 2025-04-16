import { ParticipantFieldNameFields } from "./participantFieldNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantFieldNameSingleSelectableFields {
    includeAllParticipantFieldNameFieldsValue: boolean;
    includeAllParticipantFieldNameFieldsValueSpecified: boolean;
    includeAllParticipantFieldNameFields: boolean | null;
    participantFieldNameFields: ParticipantFieldNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
