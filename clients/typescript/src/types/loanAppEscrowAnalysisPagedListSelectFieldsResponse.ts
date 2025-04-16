import { LoanAppEscrowAnalysis } from "./loanAppEscrowAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppEscrowAnalysisPagedListSelectFieldsResponse {
    loanAppEscrowAnalysis: LoanAppEscrowAnalysis[];
    loanAppEscrowAnalysisSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}