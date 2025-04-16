import { CreditReport } from "./creditReport";

export interface CreditReportList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    creditReport: CreditReport[];
    creditReportSpecified: boolean;
}