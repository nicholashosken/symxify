import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ConsoleFmSingleSelectableFields } from "./consoleFmSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ConsoleFmSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ConsoleFmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
