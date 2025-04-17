import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { NoticeSingleSelectableFields } from "./noticeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface NoticePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: NoticeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}