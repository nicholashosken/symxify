import { LoanTransfer } from "./loanTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanTransferSearchPagedSelectFieldsResponse {
    loanTransfer: LoanTransfer[];
    loanTransferSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
