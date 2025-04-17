import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckOrderDefaultFields_2 } from "./checkOrderDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdateCheckOrderDefaultByIdRequest {
    checkOrderDefaultCheckOrderProcessor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    checkOrderDefaultFields: CheckOrderDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
