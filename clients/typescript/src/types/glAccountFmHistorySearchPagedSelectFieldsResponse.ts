import { GlAccountFmHistory } from "./glAccountFmHistory";
import { VersionType } from "./versionType";

export interface GlAccountFmHistorySearchPagedSelectFieldsResponse {
    glAccountFmHistory: GlAccountFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}