import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlxLateSingleSelectableFields } from "./glxLateSingleSelectableFields";
import { GlxLateSearchFilter } from "./glxLateSearchFilter";
import { VersionType } from "./versionType";

export interface GlxLateSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlxLateSingleSelectableFields;
    searchFilter: GlxLateSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}