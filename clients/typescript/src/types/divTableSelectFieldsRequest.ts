import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DivTableSingleSelectableFields } from "./divTableSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DivTableSelectFieldsRequest {
    divTableType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DivTableSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}