import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WorkFlowRepGenSingleSelectableFields } from "./workFlowRepGenSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WorkFlowRepGenSelectFieldsRequest {
    workFlowRepGenSpecfile: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WorkFlowRepGenSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}