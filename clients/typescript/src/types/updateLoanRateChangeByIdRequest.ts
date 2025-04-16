import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanRateChangeFields_2 } from "./loanRateChangeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanRateChangeByIdRequest {
    accountNumber: string;
    loanId: string;
    loanRateChangeLocatorValue: number;
    loanRateChangeLocatorValueSpecified: boolean;
    loanRateChangeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanRateChangeFields: LoanRateChangeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}