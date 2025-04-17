import { ApPmtTermsTable } from "./apPmtTermsTable";
export interface ApPmtTermsTableList {
    hasReachedMaximumListSize: boolean | null;
    apPmtTermsTable: ApPmtTermsTable[];
}
