import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PrivGroupFields_2 } from "./privGroupFields_2";
import { VersionType } from "./versionType";
export interface UpdatePrivGroupByIdRequest {
    privGroupGroup: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    privGroupFields: PrivGroupFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
