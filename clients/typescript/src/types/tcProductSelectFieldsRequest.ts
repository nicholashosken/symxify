import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TcProductSingleSelectableFields } from "./tcProductSingleSelectableFields";
import { VersionType } from "./versionType";

export interface TcProductSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TcProductSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}