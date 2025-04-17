import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { Param360ViewSingleSelectableFields } from "./param360ViewSingleSelectableFields";
import { VersionType } from "./versionType";

export interface Param360ViewSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: Param360ViewSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}