import { ParticipantTransactionFields } from "./participantTransactionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ParticipantTransactionSingleSelectableFields {
    includeAllParticipantTransactionFieldsValue: boolean;
    includeAllParticipantTransactionFieldsValueSpecified: boolean;
    includeAllParticipantTransactionFields: boolean | null;
    participantTransactionFields: ParticipantTransactionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
