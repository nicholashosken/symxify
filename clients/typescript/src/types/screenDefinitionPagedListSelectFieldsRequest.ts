import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ScreenDefinitionSingleSelectableFields } from "./screenDefinitionSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ScreenDefinitionPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ScreenDefinitionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}