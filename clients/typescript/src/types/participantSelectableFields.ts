import { ParticipantFields } from "./participantFields";
import { ParticipantFmHistorySelectableFields } from "./participantFmHistorySelectableFields";
import { ParticipantNoteSelectableFields } from "./participantNoteSelectableFields";
import { ParticipantTransactionSelectableFields } from "./participantTransactionSelectableFields";
import { VersionType } from "./versionType";

export interface ParticipantSelectableFields {
    includeAllParticipantFields: boolean | null;
    participantFields: ParticipantFields;
    participantFmHistorySelectableFields: ParticipantFmHistorySelectableFields;
    participantNoteSelectableFields: ParticipantNoteSelectableFields;
    participantTransactionSelectableFields: ParticipantTransactionSelectableFields;
    version1: VersionType;
}