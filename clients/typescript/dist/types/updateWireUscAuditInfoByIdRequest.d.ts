import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireUscAuditInfoFields_2 } from "./wireUscAuditInfoFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireUscAuditInfoByIdRequest {
    wireSequenceNumber: number | null;
    wireUscAuditInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireUscAuditInfoFields: WireUscAuditInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
