import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PlanDefaultSingleSelectableFields } from "./planDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PlanDefaultSelectFieldsRequest {
    planDefaultReservePlanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PlanDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
