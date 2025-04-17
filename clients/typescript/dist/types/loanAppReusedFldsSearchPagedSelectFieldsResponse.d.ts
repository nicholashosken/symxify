import { LoanAppReusedFlds } from "./loanAppReusedFlds";
import { VersionType } from "./versionType";
export interface LoanAppReusedFldsSearchPagedSelectFieldsResponse {
    loanAppReusedFlds: LoanAppReusedFlds[];
    token: string;
    version1: VersionType;
    messageId: string;
}
