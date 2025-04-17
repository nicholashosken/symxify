import { ParticipantFmHistoryFields } from "./participantFmHistoryFields";
import { VersionType } from "./versionType";
export interface ParticipantFmHistorySelectableFields {
    includeAllParticipantFmHistoryFields: boolean | null;
    participantFmHistoryFields: ParticipantFmHistoryFields;
    version1: VersionType;
}
