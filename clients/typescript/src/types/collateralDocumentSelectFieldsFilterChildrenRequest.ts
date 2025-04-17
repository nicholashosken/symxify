import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralDocumentSelectableFields } from "./collateralDocumentSelectableFields";
import { CollateralDocumentChildrenFilter } from "./collateralDocumentChildrenFilter";
import { VersionType } from "./versionType";

export interface CollateralDocumentSelectFieldsFilterChildrenRequest {
    collateralNumber: string;
    collateralDocumentLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralDocumentSelectableFields;
    childrenSearchFilter: CollateralDocumentChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}