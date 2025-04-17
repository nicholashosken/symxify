import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DailyPostSingleSelectableFields } from "./dailyPostSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DailyPostSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DailyPostSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
