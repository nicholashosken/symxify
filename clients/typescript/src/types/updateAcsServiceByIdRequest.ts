import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcsServiceFields_2 } from "./acsServiceFields_2";
import { VersionType } from "./versionType";

export interface UpdateAcsServiceByIdRequest {
    acsServiceAcsServiceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acsServiceFields: AcsServiceFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}