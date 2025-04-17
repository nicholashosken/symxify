import { ShareTransaction } from "./shareTransaction";
import { VersionType } from "./versionType";
export interface ShareTransactionPagedListSelectFieldsResponse {
    shareTransaction: ShareTransaction[];
    token: string;
    version1: VersionType;
    messageId: string;
}
