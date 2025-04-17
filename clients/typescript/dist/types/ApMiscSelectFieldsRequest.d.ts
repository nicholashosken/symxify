import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ApMiscSingleSelectableFields } from "./apMiscSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ApMiscSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ApMiscSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
