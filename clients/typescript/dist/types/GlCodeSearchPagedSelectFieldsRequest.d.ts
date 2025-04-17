import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlCodeSingleSelectableFields } from "./glCodeSingleSelectableFields";
import { GlCodeSearchFilter } from "./glCodeSearchFilter";
import { VersionType } from "./versionType";
export interface GlCodeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlCodeSingleSelectableFields;
    searchFilter: GlCodeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
