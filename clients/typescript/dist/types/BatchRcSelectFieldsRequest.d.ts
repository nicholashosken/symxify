import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { BatchRcSingleSelectableFields } from "./batchRcSingleSelectableFields";
import { VersionType } from "./versionType";
export interface BatchRcSelectFieldsRequest {
    batchRcBatchReturnCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: BatchRcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
