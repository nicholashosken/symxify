import { LoanEscrowAnalysis } from "./loanEscrowAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanEscrowAnalysisSelectFieldsResponse {
    loanEscrowAnalysis: LoanEscrowAnalysis;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
