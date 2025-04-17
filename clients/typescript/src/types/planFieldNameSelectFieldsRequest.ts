import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PlanFieldNameSingleSelectableFields } from "./planFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PlanFieldNameSelectFieldsRequest {
    planFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PlanFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}