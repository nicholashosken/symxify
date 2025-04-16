import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanCheckOrderFields_2 } from "./loanCheckOrderFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanCheckOrderByIdRequest {
    accountNumber: string;
    loanId: string;
    loanCheckOrderLocatorValue: number;
    loanCheckOrderLocatorValueSpecified: boolean;
    loanCheckOrderLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanCheckOrderFields: LoanCheckOrderFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}