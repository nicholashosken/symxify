import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ImagingFields_2 } from "./imagingFields_2";
import { VersionType } from "./versionType";
export interface UpdateImagingByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    imagingFields: ImagingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
