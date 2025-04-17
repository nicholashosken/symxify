import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PlanFieldNameFields_2 } from "./planFieldNameFields_2";
import { VersionType } from "./versionType";
export interface UpdatePlanFieldNameByIdRequest {
    planFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    planFieldNameFields: PlanFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
