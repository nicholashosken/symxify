import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareNameSingleSelectableFields } from "./shareNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareNameSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}