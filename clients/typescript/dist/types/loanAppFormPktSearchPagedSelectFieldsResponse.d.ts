import { LoanAppFormPkt } from "./loanAppFormPkt";
import { VersionType } from "./versionType";
export interface LoanAppFormPktSearchPagedSelectFieldsResponse {
    loanAppFormPkt: LoanAppFormPkt[];
    token: string;
    version1: VersionType;
    messageId: string;
}
