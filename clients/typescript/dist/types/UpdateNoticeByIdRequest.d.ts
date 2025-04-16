import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoticeFields_2 } from "./noticeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateNoticeByIdRequest {
    noticeNoticeTypeValue: number;
    noticeNoticeTypeValueSpecified: boolean;
    noticeNoticeType: number | null;
    noticeNoticeDescrTypeValue: number;
    noticeNoticeDescrTypeValueSpecified: boolean;
    noticeNoticeDescrType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    noticeFields: NoticeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
