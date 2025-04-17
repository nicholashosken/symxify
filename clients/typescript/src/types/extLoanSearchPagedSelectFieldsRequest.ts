import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExtLoanSingleSelectableFields } from "./extLoanSingleSelectableFields";
import { ExtLoanSearchFilter } from "./extLoanSearchFilter";
import { VersionType } from "./versionType";

export interface ExtLoanSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExtLoanSingleSelectableFields;
    searchFilter: ExtLoanSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}