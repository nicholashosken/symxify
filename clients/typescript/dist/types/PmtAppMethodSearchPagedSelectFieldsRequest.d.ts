import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PmtAppMethodSingleSelectableFields } from "./pmtAppMethodSingleSelectableFields";
import { PmtAppMethodSearchFilter } from "./pmtAppMethodSearchFilter";
import { VersionType } from "./versionType";
export interface PmtAppMethodSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PmtAppMethodSingleSelectableFields;
    searchFilter: PmtAppMethodSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
