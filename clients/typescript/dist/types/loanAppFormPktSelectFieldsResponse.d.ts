import { LoanAppFormPkt } from "./loanAppFormPkt";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppFormPktSelectFieldsResponse {
    loanAppFormPkt: LoanAppFormPkt;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
