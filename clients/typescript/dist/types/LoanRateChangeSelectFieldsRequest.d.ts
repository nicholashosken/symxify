import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanRateChangeSingleSelectableFields } from "./loanRateChangeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanRateChangeSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanRateChangeLocatorValue: number;
    loanRateChangeLocatorValueSpecified: boolean;
    loanRateChangeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanRateChangeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
