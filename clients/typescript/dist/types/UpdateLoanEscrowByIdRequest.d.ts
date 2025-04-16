import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanEscrowFields_2 } from "./loanEscrowFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanEscrowByIdRequest {
    accountNumber: string;
    loanId: string;
    loanEscrowLocatorValue: number;
    loanEscrowLocatorValueSpecified: boolean;
    loanEscrowLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanEscrowFields: LoanEscrowFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
