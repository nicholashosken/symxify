import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TcProductFields_2 } from "./tcProductFields_2";
import { VersionType } from "./versionType";

export interface UpdateTcProductByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    tcProductFields: TcProductFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}