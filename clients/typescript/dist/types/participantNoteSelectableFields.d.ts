import { ParticipantNoteFields } from "./participantNoteFields";
import { VersionType } from "./versionType";
export interface ParticipantNoteSelectableFields {
    includeAllParticipantNoteFields: boolean | null;
    participantNoteFields: ParticipantNoteFields;
    version1: VersionType;
}
