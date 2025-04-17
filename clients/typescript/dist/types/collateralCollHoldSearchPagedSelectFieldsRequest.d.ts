import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralCollHoldSingleSelectableFields } from "./collateralCollHoldSingleSelectableFields";
import { CollateralCollHoldSearchFilter } from "./collateralCollHoldSearchFilter";
import { VersionType } from "./versionType";
export interface CollateralCollHoldSearchPagedSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralCollHoldSingleSelectableFields;
    searchFilter: CollateralCollHoldSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
