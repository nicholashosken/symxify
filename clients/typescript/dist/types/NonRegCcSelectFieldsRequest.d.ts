import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NonRegCcSingleSelectableFields } from "./nonRegCcSingleSelectableFields";
import { VersionType } from "./versionType";
export interface NonRegCcSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NonRegCcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
