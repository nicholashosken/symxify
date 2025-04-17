import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PositivePaySingleSelectableFields } from "./positivePaySingleSelectableFields";
import { PositivePaySearchFilter } from "./positivePaySearchFilter";
import { VersionType } from "./versionType";
export interface PositivePaySearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PositivePaySingleSelectableFields;
    searchFilter: PositivePaySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
