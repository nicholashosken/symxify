import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PlanDefaultFields_2 } from "./planDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdatePlanDefaultByIdRequest {
    planDefaultReservePlanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    planDefaultFields: PlanDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
