import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IntIndexFields_2 } from "./intIndexFields_2";
import { VersionType } from "./versionType";

export interface UpdateIntIndexByIdRequest {
    intIndexInterestRateIndex: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    intIndexFields: IntIndexFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}