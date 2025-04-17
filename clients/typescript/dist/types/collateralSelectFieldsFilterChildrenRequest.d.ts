import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralSelectableFields } from "./collateralSelectableFields";
import { CollateralChildrenFilter } from "./collateralChildrenFilter";
import { VersionType } from "./versionType";
export interface CollateralSelectFieldsFilterChildrenRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralSelectableFields;
    childrenSearchFilter: CollateralChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
