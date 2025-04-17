import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpAddInfoSingleSelectableFields } from "./excpAddInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExcpAddInfoSelectFieldsRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    excpAddInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpAddInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}