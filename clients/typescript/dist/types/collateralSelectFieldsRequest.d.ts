import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralSingleSelectableFields } from "./collateralSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CollateralSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
