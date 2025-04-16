import { LoanTransaction } from "./loanTransaction";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTransactionSearchPagedSelectFieldsResponse {
    loanTransaction: LoanTransaction[];
    loanTransactionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}