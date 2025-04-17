import { ParticipantFields } from "./participantFields";
import { VersionType } from "./versionType";

export interface ParticipantSingleSelectableFields {
    includeAllParticipantFields: boolean | null;
    participantFields: ParticipantFields;
    version1: VersionType;
}