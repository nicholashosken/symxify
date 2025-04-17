import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralDocumentTrackingSingleSelectableFields } from "./collateralDocumentTrackingSingleSelectableFields";
import { CollateralDocumentTrackingSearchFilter } from "./collateralDocumentTrackingSearchFilter";
import { VersionType } from "./versionType";
export interface CollateralDocumentTrackingSearchPagedSelectFieldsRequest {
    collateralNumber: string;
    collateralDocumentLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralDocumentTrackingSingleSelectableFields;
    searchFilter: CollateralDocumentTrackingSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
