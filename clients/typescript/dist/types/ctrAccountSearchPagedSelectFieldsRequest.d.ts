import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrAccountSingleSelectableFields } from "./ctrAccountSingleSelectableFields";
import { CtrAccountSearchFilter } from "./ctrAccountSearchFilter";
import { VersionType } from "./versionType";
export interface CtrAccountSearchPagedSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrAccountSingleSelectableFields;
    searchFilter: CtrAccountSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
