import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareCheckOrderSingleSelectableFields } from "./shareCheckOrderSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareCheckOrderSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareCheckOrderLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareCheckOrderSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}