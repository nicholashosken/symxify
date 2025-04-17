import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsContriLimitSingleSelectableFields } from "./irsContriLimitSingleSelectableFields";
import { VersionType } from "./versionType";

export interface IrsContriLimitSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IrsContriLimitSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}