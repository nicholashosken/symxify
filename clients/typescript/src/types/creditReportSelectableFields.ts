import { CreditReportFields } from "./creditReportFields";
import { VersionType } from "./versionType";

export interface CreditReportSelectableFields {
    includeAllCreditReportFields: boolean | null;
    creditReportFields: CreditReportFields;
    version1: VersionType;
}