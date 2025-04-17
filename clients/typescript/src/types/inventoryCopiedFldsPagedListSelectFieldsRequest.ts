import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryCopiedFldsSingleSelectableFields } from "./inventoryCopiedFldsSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InventoryCopiedFldsPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryCopiedFldsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}