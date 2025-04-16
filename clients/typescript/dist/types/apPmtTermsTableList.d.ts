import { ApPmtTermsTable } from "./apPmtTermsTable";
export interface ApPmtTermsTableList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    apPmtTermsTable: ApPmtTermsTable[];
    apPmtTermsTableSpecified: boolean;
}
