import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LateChgSingleSelectableFields } from "./lateChgSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LateChgSelectFieldsRequest {
    lateChgLateChargeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LateChgSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}