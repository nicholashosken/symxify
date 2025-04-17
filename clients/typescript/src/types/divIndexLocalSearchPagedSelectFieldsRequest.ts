import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DivIndexLocalSingleSelectableFields } from "./divIndexLocalSingleSelectableFields";
import { DivIndexLocalSearchFilter } from "./divIndexLocalSearchFilter";
import { VersionType } from "./versionType";

export interface DivIndexLocalSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DivIndexLocalSingleSelectableFields;
    searchFilter: DivIndexLocalSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}