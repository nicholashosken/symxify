import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanSingleSelectableFields } from "./externalLoanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExternalLoanSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalLoanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}