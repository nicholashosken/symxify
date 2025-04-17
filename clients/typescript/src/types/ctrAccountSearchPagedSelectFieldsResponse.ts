import { CtrAccount } from "./ctrAccount";
import { VersionType } from "./versionType";

export interface CtrAccountSearchPagedSelectFieldsResponse {
    ctrAccount: CtrAccount[];
    token: string;
    version1: VersionType;
    messageId: string;
}