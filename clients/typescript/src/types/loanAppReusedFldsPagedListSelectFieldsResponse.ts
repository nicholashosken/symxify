import { LoanAppReusedFlds } from "./loanAppReusedFlds";
import { VersionType } from "./versionType";

export interface LoanAppReusedFldsPagedListSelectFieldsResponse {
    loanAppReusedFlds: LoanAppReusedFlds[];
    token: string;
    version1: VersionType;
    messageId: string;
}