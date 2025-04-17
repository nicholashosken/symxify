import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ApPmtTermsTableSingleSelectableFields } from "./apPmtTermsTableSingleSelectableFields";
import { ApPmtTermsTableSearchFilter } from "./apPmtTermsTableSearchFilter";
import { VersionType } from "./versionType";
export interface ApPmtTermsTableSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ApPmtTermsTableSingleSelectableFields;
    searchFilter: ApPmtTermsTableSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
