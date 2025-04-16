import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanHoldFields_2 } from "./loanHoldFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateLoanHoldByIdRequest {
    accountNumber: string;
    loanId: string;
    loanHoldLocatorValue: number;
    loanHoldLocatorValueSpecified: boolean;
    loanHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    loanHoldFields: LoanHoldFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
