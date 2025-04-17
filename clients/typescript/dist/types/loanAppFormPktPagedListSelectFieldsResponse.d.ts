import { LoanAppFormPkt } from "./loanAppFormPkt";
import { VersionType } from "./versionType";
export interface LoanAppFormPktPagedListSelectFieldsResponse {
    loanAppFormPkt: LoanAppFormPkt[];
    token: string;
    version1: VersionType;
    messageId: string;
}
