import { ApPmtTermsTable } from "./apPmtTermsTable";
import { VersionType } from "./versionType";
export interface ApPmtTermsTablePagedListSelectFieldsResponse {
    apPmtTermsTable: ApPmtTermsTable[];
    token: string;
    version1: VersionType;
    messageId: string;
}
