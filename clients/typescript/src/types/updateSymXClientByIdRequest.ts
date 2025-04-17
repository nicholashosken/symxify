import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXClientFields_2 } from "./symXClientFields_2";
import { VersionType } from "./versionType";

export interface UpdateSymXClientByIdRequest {
    symXClientInstanceId: number | null;
    symXClientSymXClientNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    symXClientFields: SymXClientFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}