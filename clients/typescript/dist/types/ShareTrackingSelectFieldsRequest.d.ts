import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareTrackingSingleSelectableFields } from "./shareTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareTrackingSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
