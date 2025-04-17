import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CrsSingleSelectableFields } from "./crsSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CrsSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CrsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}