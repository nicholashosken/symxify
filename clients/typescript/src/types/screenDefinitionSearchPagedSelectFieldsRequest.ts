import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ScreenDefinitionSingleSelectableFields } from "./screenDefinitionSingleSelectableFields";
import { ScreenDefinitionSearchFilter } from "./screenDefinitionSearchFilter";
import { VersionType } from "./versionType";

export interface ScreenDefinitionSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ScreenDefinitionSingleSelectableFields;
    searchFilter: ScreenDefinitionSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}