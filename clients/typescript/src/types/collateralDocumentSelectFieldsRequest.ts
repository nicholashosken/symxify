import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralDocumentSingleSelectableFields } from "./collateralDocumentSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CollateralDocumentSelectFieldsRequest {
    collateralNumber: string;
    collateralDocumentLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralDocumentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}