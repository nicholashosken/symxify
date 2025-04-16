import { LoanAppEscrow } from "./loanAppEscrow";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppEscrowSelectFieldsResponse {
    loanAppEscrow: LoanAppEscrow;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}