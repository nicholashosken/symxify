import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralTrackingSingleSelectableFields } from "./collateralTrackingSingleSelectableFields";
import { CollateralTrackingSearchFilter } from "./collateralTrackingSearchFilter";
import { VersionType } from "./versionType";
export interface CollateralTrackingSearchPagedSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralTrackingSingleSelectableFields;
    searchFilter: CollateralTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
