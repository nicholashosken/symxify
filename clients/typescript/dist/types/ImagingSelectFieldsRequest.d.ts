import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ImagingSingleSelectableFields } from "./imagingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ImagingSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ImagingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
