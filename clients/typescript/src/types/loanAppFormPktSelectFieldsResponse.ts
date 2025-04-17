import { LoanAppFormPkt } from "./loanAppFormPkt";
import { VersionType } from "./versionType";

export interface LoanAppFormPktSelectFieldsResponse {
    loanAppFormPkt: LoanAppFormPkt;
    version1: VersionType;
    messageId: string;
}