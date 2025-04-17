import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WarningsSingleSelectableFields } from "./warningsSingleSelectableFields";
import { WarningsSearchFilter } from "./warningsSearchFilter";
import { VersionType } from "./versionType";

export interface WarningsSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WarningsSingleSelectableFields;
    searchFilter: WarningsSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}