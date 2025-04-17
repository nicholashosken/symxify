import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NameSingleSelectableFields } from "./nameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface NameSelectFieldsRequest {
    accountNumber: string;
    nameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
