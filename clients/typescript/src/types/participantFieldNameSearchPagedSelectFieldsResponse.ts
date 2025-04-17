import { ParticipantFieldName } from "./participantFieldName";
import { VersionType } from "./versionType";

export interface ParticipantFieldNameSearchPagedSelectFieldsResponse {
    participantFieldName: ParticipantFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}