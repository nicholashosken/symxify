import { ParticipantFmHistory } from "./participantFmHistory";
import { VersionType } from "./versionType";
export interface ParticipantFmHistorySearchPagedSelectFieldsResponse {
    participantFmHistory: ParticipantFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
