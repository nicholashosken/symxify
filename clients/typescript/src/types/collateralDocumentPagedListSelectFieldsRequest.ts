import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralDocumentSingleSelectableFields } from "./collateralDocumentSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CollateralDocumentPagedListSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralDocumentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}