import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanCheckOrderSingleSelectableFields } from "./loanCheckOrderSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanCheckOrderSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanCheckOrderLocatorValue: number;
    loanCheckOrderLocatorValueSpecified: boolean;
    loanCheckOrderLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanCheckOrderSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}