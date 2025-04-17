import { ParticipantFieldName } from "./participantFieldName";
import { VersionType } from "./versionType";

export interface ParticipantFieldNamePagedListSelectFieldsResponse {
    participantFieldName: ParticipantFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}