import { ParticipantFmHistory } from "./participantFmHistory";
import { VersionType } from "./versionType";
export interface ParticipantFmHistoryPagedListSelectFieldsResponse {
    participantFmHistory: ParticipantFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
