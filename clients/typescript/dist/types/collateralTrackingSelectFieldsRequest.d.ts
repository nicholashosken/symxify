import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralTrackingSingleSelectableFields } from "./collateralTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CollateralTrackingSelectFieldsRequest {
    collateralNumber: string;
    collateralTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
