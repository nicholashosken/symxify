import { LoanAppFormPkt } from "./loanAppFormPkt";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppFormPktPagedListSelectFieldsResponse {
    loanAppFormPkt: LoanAppFormPkt[];
    loanAppFormPktSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}