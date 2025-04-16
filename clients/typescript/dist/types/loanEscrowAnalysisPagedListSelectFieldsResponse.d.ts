import { LoanEscrowAnalysis } from "./loanEscrowAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanEscrowAnalysisPagedListSelectFieldsResponse {
    loanEscrowAnalysis: LoanEscrowAnalysis[];
    loanEscrowAnalysisSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
