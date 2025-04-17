import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoticeFields_2 } from "./noticeFields_2";
import { VersionType } from "./versionType";

export interface UpdateNoticeByIdRequest {
    noticeNoticeType: number | null;
    noticeNoticeDescrType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    noticeFields: NoticeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}