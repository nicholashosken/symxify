import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InsTypeSingleSelectableFields } from "./insTypeSingleSelectableFields";
import { InsTypeSearchFilter } from "./insTypeSearchFilter";
import { VersionType } from "./versionType";

export interface InsTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InsTypeSingleSelectableFields;
    searchFilter: InsTypeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}