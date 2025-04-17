import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireInCmtCodeFields_2 } from "./wireInCmtCodeFields_2";
import { VersionType } from "./versionType";

export interface UpdateWireInCmtCodeByIdRequest {
    wireInCmtCodeSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireInCmtCodeFields: WireInCmtCodeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}