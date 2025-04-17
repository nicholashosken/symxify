import { GlAccount } from "./glAccount";
import { VersionType } from "./versionType";
export interface GlAccountSelectFieldsResponse {
    glAccount: GlAccount;
    version1: VersionType;
    messageId: string;
}
