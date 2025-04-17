import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireIdCodeFields_2 } from "./wireIdCodeFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireIdCodeByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireIdCodeFields: WireIdCodeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
