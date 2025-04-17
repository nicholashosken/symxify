import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlCategorySingleSelectableFields } from "./glCategorySingleSelectableFields";
import { GlCategorySearchFilter } from "./glCategorySearchFilter";
import { VersionType } from "./versionType";
export interface GlCategorySearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlCategorySingleSelectableFields;
    searchFilter: GlCategorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
