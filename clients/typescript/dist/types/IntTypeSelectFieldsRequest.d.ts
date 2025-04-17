import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IntTypeSingleSelectableFields } from "./intTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IntTypeSelectFieldsRequest {
    intTypeInterestType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IntTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
