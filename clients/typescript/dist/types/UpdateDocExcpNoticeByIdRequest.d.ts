import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocExcpNoticeFields_2 } from "./docExcpNoticeFields_2";
import { VersionType } from "./versionType";
export interface UpdateDocExcpNoticeByIdRequest {
    docExcpNoticeNoticeNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    docExcpNoticeFields: DocExcpNoticeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
