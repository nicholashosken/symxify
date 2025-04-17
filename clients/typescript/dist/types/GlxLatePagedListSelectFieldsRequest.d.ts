import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlxLateSingleSelectableFields } from "./glxLateSingleSelectableFields";
import { VersionType } from "./versionType";
export interface GlxLatePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlxLateSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
