import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcctMembGrpDescSingleSelectableFields } from "./acctMembGrpDescSingleSelectableFields";
import { AcctMembGrpDescSearchFilter } from "./acctMembGrpDescSearchFilter";
import { VersionType } from "./versionType";

export interface AcctMembGrpDescSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcctMembGrpDescSingleSelectableFields;
    searchFilter: AcctMembGrpDescSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}