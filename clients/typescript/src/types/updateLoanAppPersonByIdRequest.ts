import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPersonFields_2 } from "./loanAppPersonFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateLoanAppPersonByIdRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPersonLocatorValue: number;
    loanAppPersonLocatorValueSpecified: boolean;
    loanAppPersonLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanAppPersonFields: LoanAppPersonFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}