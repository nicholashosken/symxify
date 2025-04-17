import { ParticipantFields } from "./participantFields";
import { ParticipantFmHistorySelectableFields } from "./participantFmHistorySelectableFields";
import { ParticipantNoteSelectableFields } from "./participantNoteSelectableFields";
import { ParticipantTransactionSelectableFields } from "./participantTransactionSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantSelectableFields {
    includeAllParticipantFieldsValue: boolean;
    includeAllParticipantFieldsValueSpecified: boolean;
    includeAllParticipantFields: boolean | null;
    participantFields: ParticipantFields;
    participantFmHistorySelectableFields: ParticipantFmHistorySelectableFields;
    participantNoteSelectableFields: ParticipantNoteSelectableFields;
    participantTransactionSelectableFields: ParticipantTransactionSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
