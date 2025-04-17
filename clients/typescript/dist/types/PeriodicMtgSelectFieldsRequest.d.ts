import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PeriodicMtgSingleSelectableFields } from "./periodicMtgSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PeriodicMtgSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PeriodicMtgSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
