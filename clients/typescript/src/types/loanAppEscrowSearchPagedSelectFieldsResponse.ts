import { LoanAppEscrow } from "./loanAppEscrow";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppEscrowSearchPagedSelectFieldsResponse {
    loanAppEscrow: LoanAppEscrow[];
    loanAppEscrowSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}