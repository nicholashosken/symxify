import { ParticipantFmHistoryFields } from "./participantFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ParticipantFmHistorySelectableFields {
    includeAllParticipantFmHistoryFieldsValue: boolean;
    includeAllParticipantFmHistoryFieldsValueSpecified: boolean;
    includeAllParticipantFmHistoryFields: boolean | null;
    participantFmHistoryFields: ParticipantFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}