import { CreditReport } from "./creditReport";

export interface CreditReportList {
    hasReachedMaximumListSize: boolean | null;
    creditReport: CreditReport[];
}