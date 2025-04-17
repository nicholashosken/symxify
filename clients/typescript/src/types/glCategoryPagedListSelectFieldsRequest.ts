import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlCategorySingleSelectableFields } from "./glCategorySingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlCategoryPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlCategorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}