import { CtrAccount } from "./ctrAccount";
import { VersionType } from "./versionType";

export interface CtrAccountSelectFieldsResponse {
    ctrAccount: CtrAccount;
    version1: VersionType;
    messageId: string;
}