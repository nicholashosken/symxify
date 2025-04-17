import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcsServiceSingleSelectableFields } from "./acsServiceSingleSelectableFields";
import { AcsServiceSearchFilter } from "./acsServiceSearchFilter";
import { VersionType } from "./versionType";
export interface AcsServiceSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcsServiceSingleSelectableFields;
    searchFilter: AcsServiceSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
