import { LoanTransfer } from "./loanTransfer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanTransferSelectFieldsResponse {
    loanTransfer: LoanTransfer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
