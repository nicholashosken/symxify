import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireTypeCodeFields_2 } from "./wireTypeCodeFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireTypeCodeByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireTypeCodeFields: WireTypeCodeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
