import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareDefaultFields_2 } from "./shareDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdateShareDefaultByIdRequest {
    shareDefaultShareType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    shareDefaultFields: ShareDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
