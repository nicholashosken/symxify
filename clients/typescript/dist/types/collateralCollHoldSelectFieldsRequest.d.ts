import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralCollHoldSingleSelectableFields } from "./collateralCollHoldSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CollateralCollHoldSelectFieldsRequest {
    collateralNumber: string;
    collateralCollHoldLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralCollHoldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
