import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralTypeSingleSelectableFields } from "./collateralTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CollateralTypePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}