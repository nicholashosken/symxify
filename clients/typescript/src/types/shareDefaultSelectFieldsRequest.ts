import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareDefaultSingleSelectableFields } from "./shareDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareDefaultSelectFieldsRequest {
    shareDefaultShareType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}