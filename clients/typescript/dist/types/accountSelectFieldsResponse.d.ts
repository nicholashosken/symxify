import { Account } from "./account";
import { VersionType } from "./versionType";
export interface AccountSelectFieldsResponse {
    account: Account;
    version1: VersionType;
    messageId: string;
}
