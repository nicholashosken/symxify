import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NoticeSingleSelectableFields } from "./noticeSingleSelectableFields";
import { NoticeSearchFilter } from "./noticeSearchFilter";
import { VersionType } from "./versionType";

export interface NoticeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NoticeSingleSelectableFields;
    searchFilter: NoticeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}