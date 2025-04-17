import { ApPmtTermsTable } from "./apPmtTermsTable";
import { VersionType } from "./versionType";

export interface ApPmtTermsTableSearchPagedSelectFieldsResponse {
    apPmtTermsTable: ApPmtTermsTable[];
    token: string;
    version1: VersionType;
    messageId: string;
}