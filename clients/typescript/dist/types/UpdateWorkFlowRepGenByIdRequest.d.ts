import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WorkFlowRepGenFields_2 } from "./workFlowRepGenFields_2";
import { VersionType } from "./versionType";
export interface UpdateWorkFlowRepGenByIdRequest {
    workFlowRepGenSpecfile: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    workFlowRepGenFields: WorkFlowRepGenFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
