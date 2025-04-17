import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbAddOnFields_2 } from "./onlineSbAddOnFields_2";
import { VersionType } from "./versionType";

export interface UpdateOnlineSbAddOnByIdRequest {
    onlineSbAddOnRuleOrdinal: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineSbAddOnFields: OnlineSbAddOnFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}