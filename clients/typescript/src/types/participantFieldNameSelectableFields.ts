import { ParticipantFieldNameFields } from "./participantFieldNameFields";
import { VersionType } from "./versionType";

export interface ParticipantFieldNameSelectableFields {
    includeAllParticipantFieldNameFields: boolean | null;
    participantFieldNameFields: ParticipantFieldNameFields;
    version1: VersionType;
}