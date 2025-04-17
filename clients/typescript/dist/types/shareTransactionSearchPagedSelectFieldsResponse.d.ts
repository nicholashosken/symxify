import { ShareTransaction } from "./shareTransaction";
import { VersionType } from "./versionType";
export interface ShareTransactionSearchPagedSelectFieldsResponse {
    shareTransaction: ShareTransaction[];
    token: string;
    version1: VersionType;
    messageId: string;
}
