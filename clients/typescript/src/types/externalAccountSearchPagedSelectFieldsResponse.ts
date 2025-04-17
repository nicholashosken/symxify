import { ExternalAccount } from "./externalAccount";
import { VersionType } from "./versionType";

export interface ExternalAccountSearchPagedSelectFieldsResponse {
    externalAccount: ExternalAccount[];
    token: string;
    version1: VersionType;
    messageId: string;
}