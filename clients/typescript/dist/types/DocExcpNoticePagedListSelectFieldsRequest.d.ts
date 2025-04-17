import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DocExcpNoticeSingleSelectableFields } from "./docExcpNoticeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DocExcpNoticePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DocExcpNoticeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
