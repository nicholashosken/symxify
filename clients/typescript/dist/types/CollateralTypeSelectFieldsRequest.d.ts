import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralTypeSingleSelectableFields } from "./collateralTypeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CollateralTypeSelectFieldsRequest {
    collateralTypeCollateralType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
