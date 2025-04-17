import { ParticipantTransactionFields } from "./participantTransactionFields";
import { VersionType } from "./versionType";
export interface ParticipantTransactionSelectableFields {
    includeAllParticipantTransactionFields: boolean | null;
    participantTransactionFields: ParticipantTransactionFields;
    version1: VersionType;
}
