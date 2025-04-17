import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireOutCmtCodeFields_2 } from "./wireOutCmtCodeFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireOutCmtCodeByIdRequest {
    wireOutCmtCodeSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireOutCmtCodeFields: WireOutCmtCodeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
