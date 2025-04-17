import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IntTypeFields_2 } from "./intTypeFields_2";
import { VersionType } from "./versionType";

export interface UpdateIntTypeByIdRequest {
    intTypeInterestType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    intTypeFields: IntTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}