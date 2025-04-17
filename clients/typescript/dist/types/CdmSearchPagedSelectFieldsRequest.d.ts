import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CdmSingleSelectableFields } from "./cdmSingleSelectableFields";
import { CdmSearchFilter } from "./cdmSearchFilter";
import { VersionType } from "./versionType";
export interface CdmSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CdmSingleSelectableFields;
    searchFilter: CdmSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
