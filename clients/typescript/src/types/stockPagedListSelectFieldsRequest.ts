import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { StockSingleSelectableFields } from "./stockSingleSelectableFields";
import { VersionType } from "./versionType";

export interface StockPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: StockSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}