import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { YellowHammerFields_2 } from "./yellowHammerFields_2";
import { VersionType } from "./versionType";

export interface UpdateYellowHammerByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    yellowHammerFields: YellowHammerFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}