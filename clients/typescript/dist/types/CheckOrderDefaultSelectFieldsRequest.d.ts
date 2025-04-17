import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckOrderDefaultSingleSelectableFields } from "./checkOrderDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CheckOrderDefaultSelectFieldsRequest {
    checkOrderDefaultCheckOrderProcessor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CheckOrderDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
