import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlTrackingTypeSingleSelectableFields } from "./glTrackingTypeSingleSelectableFields";
import { GlTrackingTypeSearchFilter } from "./glTrackingTypeSearchFilter";
import { VersionType } from "./versionType";

export interface GlTrackingTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlTrackingTypeSingleSelectableFields;
    searchFilter: GlTrackingTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}