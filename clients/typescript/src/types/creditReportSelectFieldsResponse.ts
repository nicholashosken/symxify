import { CreditReport } from "./creditReport";
import { VersionType } from "./versionType";

export interface CreditReportSelectFieldsResponse {
    creditReport: CreditReport;
    version1: VersionType;
    messageId: string;
}