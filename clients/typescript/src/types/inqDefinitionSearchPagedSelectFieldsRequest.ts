import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InqDefinitionSingleSelectableFields } from "./inqDefinitionSingleSelectableFields";
import { InqDefinitionSearchFilter } from "./inqDefinitionSearchFilter";
import { VersionType } from "./versionType";

export interface InqDefinitionSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InqDefinitionSingleSelectableFields;
    searchFilter: InqDefinitionSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}