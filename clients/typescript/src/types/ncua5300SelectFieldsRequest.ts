import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { Ncua5300SingleSelectableFields } from "./ncua5300SingleSelectableFields";
import { VersionType } from "./versionType";

export interface Ncua5300SelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: Ncua5300SingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}