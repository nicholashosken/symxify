import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralFmHistorySingleSelectableFields } from "./collateralFmHistorySingleSelectableFields";
import { VersionType } from "./versionType";

export interface CollateralFmHistoryPagedListSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralFmHistorySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}