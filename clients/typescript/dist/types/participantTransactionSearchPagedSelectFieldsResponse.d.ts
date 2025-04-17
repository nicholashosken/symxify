import { ParticipantTransaction } from "./participantTransaction";
import { VersionType } from "./versionType";
export interface ParticipantTransactionSearchPagedSelectFieldsResponse {
    participantTransaction: ParticipantTransaction[];
    token: string;
    version1: VersionType;
    messageId: string;
}
