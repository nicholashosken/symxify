import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXGeneralFields_2 } from "./symXGeneralFields_2";
import { VersionType } from "./versionType";

export interface UpdateSymXGeneralByIdRequest {
    symXGeneralInstanceId: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    symXGeneralFields: SymXGeneralFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}