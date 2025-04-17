import { LoanAppReusedFlds } from "./loanAppReusedFlds";
import { VersionType } from "./versionType";

export interface LoanAppReusedFldsSelectFieldsResponse {
    loanAppReusedFlds: LoanAppReusedFlds;
    version1: VersionType;
    messageId: string;
}