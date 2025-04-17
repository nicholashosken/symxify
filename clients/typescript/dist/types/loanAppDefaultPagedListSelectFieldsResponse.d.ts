import { LoanAppDefault } from "./loanAppDefault";
import { VersionType } from "./versionType";
export interface LoanAppDefaultPagedListSelectFieldsResponse {
    loanAppDefault: LoanAppDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
