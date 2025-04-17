import { ParticipantFmHistoryFields } from "./participantFmHistoryFields";
import { VersionType } from "./versionType";
export interface ParticipantFmHistorySingleSelectableFields {
    includeAllParticipantFmHistoryFields: boolean | null;
    participantFmHistoryFields: ParticipantFmHistoryFields;
    version1: VersionType;
}
