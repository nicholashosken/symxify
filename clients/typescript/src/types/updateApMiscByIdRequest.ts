import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ApMiscFields_2 } from "./apMiscFields_2";
import { VersionType } from "./versionType";

export interface UpdateApMiscByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    apMiscFields: ApMiscFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}