import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryCopiedFldsSingleSelectableFields } from "./inventoryCopiedFldsSingleSelectableFields";
import { InventoryCopiedFldsSearchFilter } from "./inventoryCopiedFldsSearchFilter";
import { VersionType } from "./versionType";
export interface InventoryCopiedFldsSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryCopiedFldsSingleSelectableFields;
    searchFilter: InventoryCopiedFldsSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
