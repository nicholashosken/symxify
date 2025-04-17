import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlTableSingleSelectableFields } from "./glTableSingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlTablePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlTableSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}