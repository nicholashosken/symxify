import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralDocumentTrackingSingleSelectableFields } from "./collateralDocumentTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CollateralDocumentTrackingSelectFieldsRequest {
    collateralNumber: string;
    collateralDocumentLocator: number | null;
    collateralDocumentTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralDocumentTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}