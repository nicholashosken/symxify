import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InqDefinitionSingleSelectableFields } from "./inqDefinitionSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InqDefinitionPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InqDefinitionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}