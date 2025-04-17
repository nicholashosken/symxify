import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DocExcpNoticeSingleSelectableFields } from "./docExcpNoticeSingleSelectableFields";
import { DocExcpNoticeSearchFilter } from "./docExcpNoticeSearchFilter";
import { VersionType } from "./versionType";

export interface DocExcpNoticeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DocExcpNoticeSingleSelectableFields;
    searchFilter: DocExcpNoticeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}