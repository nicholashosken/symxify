import { LoanEscrow } from "./loanEscrow";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanEscrowPagedListSelectFieldsResponse {
    loanEscrow: LoanEscrow[];
    loanEscrowSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}