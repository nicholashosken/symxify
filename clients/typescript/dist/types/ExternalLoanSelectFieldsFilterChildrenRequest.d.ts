import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanSelectableFields } from "./externalLoanSelectableFields";
import { ExternalLoanChildrenFilter } from "./externalLoanChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalLoanSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    externalLoanLocatorValue: number;
    externalLoanLocatorValueSpecified: boolean;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalLoanSelectableFields;
    childrenSearchFilter: ExternalLoanChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
