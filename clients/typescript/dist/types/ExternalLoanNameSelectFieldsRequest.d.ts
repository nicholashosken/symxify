import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalLoanNameSingleSelectableFields } from "./externalLoanNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalLoanNameSelectFieldsRequest {
    accountNumber: string;
    externalLoanLocator: number | null;
    externalLoanNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalLoanNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
