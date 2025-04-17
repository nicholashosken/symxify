import { CreditReportFields } from "./creditReportFields";
import { VersionType } from "./versionType";

export interface CreditReportSingleSelectableFields {
    includeAllCreditReportFields: boolean | null;
    creditReportFields: CreditReportFields;
    version1: VersionType;
}