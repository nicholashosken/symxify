import { ExternalAccount } from "./externalAccount";
import { VersionType } from "./versionType";

export interface ExternalAccountSelectFieldsResponse {
    externalAccount: ExternalAccount;
    version1: VersionType;
    messageId: string;
}