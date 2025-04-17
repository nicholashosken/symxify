import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcsGlobalSingleSelectableFields } from "./acsGlobalSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AcsGlobalSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcsGlobalSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}