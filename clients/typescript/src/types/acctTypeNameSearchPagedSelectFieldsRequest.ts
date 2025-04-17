import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcctTypeNameSingleSelectableFields } from "./acctTypeNameSingleSelectableFields";
import { AcctTypeNameSearchFilter } from "./acctTypeNameSearchFilter";
import { VersionType } from "./versionType";

export interface AcctTypeNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcctTypeNameSingleSelectableFields;
    searchFilter: AcctTypeNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}