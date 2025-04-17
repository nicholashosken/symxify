import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareTransferSingleSelectableFields } from "./shareTransferSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareTransferSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareTransferLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
