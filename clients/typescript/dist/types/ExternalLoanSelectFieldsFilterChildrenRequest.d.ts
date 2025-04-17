import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanSelectableFields } from "./externalLoanSelectableFields";
import { ExternalLoanChildrenFilter } from "./externalLoanChildrenFilter";
import { VersionType } from "./versionType";
export interface ExternalLoanSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalLoanSelectableFields;
    childrenSearchFilter: ExternalLoanChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
