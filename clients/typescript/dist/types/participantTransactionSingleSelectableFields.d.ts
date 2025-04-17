import { ParticipantTransactionFields } from "./participantTransactionFields";
import { VersionType } from "./versionType";
export interface ParticipantTransactionSingleSelectableFields {
    includeAllParticipantTransactionFields: boolean | null;
    participantTransactionFields: ParticipantTransactionFields;
    version1: VersionType;
}
