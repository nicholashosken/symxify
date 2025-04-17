import { Account } from "./account";
import { VersionType } from "./versionType";

export interface AccountSelectFieldsFilterChildrenResponse {
    account: Account;
    version1: VersionType;
    messageId: string;
}