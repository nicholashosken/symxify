import { LoanAppWorkFlow } from "./loanAppWorkFlow";
import { VersionType } from "./versionType";

export interface LoanAppWorkFlowPagedListSelectFieldsResponse {
    loanAppWorkFlow: LoanAppWorkFlow[];
    token: string;
    version1: VersionType;
    messageId: string;
}