import { VersionType } from "./versionType";
import { CreditReportBaseResponse } from "./creditReportBaseResponse";
export interface CreditReportResponse extends CreditReportBaseResponse {
    credRepLocator: number | null;
    version1: VersionType;
}
