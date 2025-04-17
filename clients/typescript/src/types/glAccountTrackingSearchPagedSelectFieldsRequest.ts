import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlAccountTrackingSingleSelectableFields } from "./glAccountTrackingSingleSelectableFields";
import { GlAccountTrackingSearchFilter } from "./glAccountTrackingSearchFilter";
import { VersionType } from "./versionType";

export interface GlAccountTrackingSearchPagedSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlAccountTrackingSingleSelectableFields;
    searchFilter: GlAccountTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}