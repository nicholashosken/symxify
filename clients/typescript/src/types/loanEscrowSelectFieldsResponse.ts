import { LoanEscrow } from "./loanEscrow";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanEscrowSelectFieldsResponse {
    loanEscrow: LoanEscrow;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}