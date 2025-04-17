import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SymXGeneralSingleSelectableFields } from "./symXGeneralSingleSelectableFields";
import { SymXGeneralSearchFilter } from "./symXGeneralSearchFilter";
import { VersionType } from "./versionType";
export interface SymXGeneralSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SymXGeneralSingleSelectableFields;
    searchFilter: SymXGeneralSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
