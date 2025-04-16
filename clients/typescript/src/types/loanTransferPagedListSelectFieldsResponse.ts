import { LoanTransfer } from "./loanTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanTransferPagedListSelectFieldsResponse {
    loanTransfer: LoanTransfer[];
    loanTransferSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}