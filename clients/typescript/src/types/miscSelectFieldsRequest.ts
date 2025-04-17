import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MiscSingleSelectableFields } from "./miscSingleSelectableFields";
import { VersionType } from "./versionType";

export interface MiscSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MiscSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}