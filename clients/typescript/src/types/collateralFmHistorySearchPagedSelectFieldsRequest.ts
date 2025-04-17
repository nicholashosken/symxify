import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralFmHistorySingleSelectableFields } from "./collateralFmHistorySingleSelectableFields";
import { CollateralFmHistorySearchFilter } from "./collateralFmHistorySearchFilter";
import { VersionType } from "./versionType";

export interface CollateralFmHistorySearchPagedSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralFmHistorySingleSelectableFields;
    searchFilter: CollateralFmHistorySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}