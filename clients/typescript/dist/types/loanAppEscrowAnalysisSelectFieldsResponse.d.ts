import { LoanAppEscrowAnalysis } from "./loanAppEscrowAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppEscrowAnalysisSelectFieldsResponse {
    loanAppEscrowAnalysis: LoanAppEscrowAnalysis;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
