import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoticeSingleSelectableFields } from "./noticeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface NoticeSelectFieldsRequest {
    noticeNoticeType: number | null;
    noticeNoticeDescrType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NoticeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
