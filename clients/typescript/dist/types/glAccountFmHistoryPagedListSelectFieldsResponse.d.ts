import { GlAccountFmHistory } from "./glAccountFmHistory";
import { VersionType } from "./versionType";
export interface GlAccountFmHistoryPagedListSelectFieldsResponse {
    glAccountFmHistory: GlAccountFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
