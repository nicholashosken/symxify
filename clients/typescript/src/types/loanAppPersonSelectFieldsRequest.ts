import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanAppPersonSingleSelectableFields } from "./loanAppPersonSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppPersonSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    loanAppPersonLocatorValue: number;
    loanAppPersonLocatorValueSpecified: boolean;
    loanAppPersonLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanAppPersonSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}