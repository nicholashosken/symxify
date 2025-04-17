import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralCollHoldSingleSelectableFields } from "./collateralCollHoldSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CollateralCollHoldPagedListSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralCollHoldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
