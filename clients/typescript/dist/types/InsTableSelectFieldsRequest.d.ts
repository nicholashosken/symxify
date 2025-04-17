import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InsTableSingleSelectableFields } from "./insTableSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InsTableSelectFieldsRequest {
    insTableInsuranceTable: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InsTableSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
