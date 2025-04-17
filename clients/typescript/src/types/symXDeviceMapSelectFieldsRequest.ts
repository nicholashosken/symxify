import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXDeviceMapSingleSelectableFields } from "./symXDeviceMapSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SymXDeviceMapSelectFieldsRequest {
    symXDeviceMapInstanceId: number | null;
    symXDeviceMapDeviceId: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SymXDeviceMapSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}