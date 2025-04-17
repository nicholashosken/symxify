import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { Ncua5300Fields_2 } from "./ncua5300Fields_2";
import { VersionType } from "./versionType";
export interface UpdateNcua5300ByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ncua5300Fields: Ncua5300Fields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
