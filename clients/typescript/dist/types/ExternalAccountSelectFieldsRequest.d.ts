import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalAccountSingleSelectableFields } from "./externalAccountSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ExternalAccountSelectFieldsRequest {
    accountNumber: string;
    externalAccountLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExternalAccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
