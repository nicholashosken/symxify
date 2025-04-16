import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoticeSingleSelectableFields } from "./noticeSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NoticeSelectFieldsRequest {
    noticeNoticeTypeValue: number;
    noticeNoticeTypeValueSpecified: boolean;
    noticeNoticeType: number | null;
    noticeNoticeDescrTypeValue: number;
    noticeNoticeDescrTypeValueSpecified: boolean;
    noticeNoticeDescrType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NoticeSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}